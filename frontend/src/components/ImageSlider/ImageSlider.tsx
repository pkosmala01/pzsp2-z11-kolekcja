import * as Styled from './ImageSlider.styles'
import React, { useState } from "react";
import fileToUrl from '../../untils/fileToUrl';
import sha1 from '../../untils/sha1';
import { ChevronRight, ChevronLeft} from '@mui/icons-material';

const MAX_SIZE_MB = 12;
const MAX_FILES = 10;

type Status = 'ok' | 'uploading' | 'error'

type ISliderItem = {
  name: string,
  status: Status,
  image: string,
  hash: string,
}

const ImageSlider: React.FC = () => {

  const [sliderItems, setSliderItems] = useState<ISliderItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null)

  const handlePrev = () => {
    if (currentIndex === 0) {
      return;
    }
    setCurrentIndex(currentIndex => currentIndex - 1);
    setTranslateValue(translateValue => translateValue + 100);
  };

  const handleNext = () => {
    if (currentIndex === sliderItems.length - 1) {
      return;
    }
    setCurrentIndex(currentIndex => currentIndex + 1);
    setTranslateValue(translateValue => translateValue - 100);

  };

  const setStatus = (itemHash: string, status: Status) => {
    setSliderItems(si => {
      const i = si!.findIndex(e => e.hash === itemHash);
      let newSi = si.slice();
      newSi[i].status = status;
      return newSi;
    })
  }

  const addItem = (item: ISliderItem) => {
    setSliderItems((si) => {
      let newSi = si.slice();
      newSi?.push(item)
      return newSi
    })
  }

  const removeItemByName = (itemHash: string) => {
    setSliderItems(si => {
      return si.filter((item) => item.hash !== itemHash)
    });
    if(currentIndex === sliderItems.length - 1){
      handlePrev();
    }
  }

  const inputChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    const handleItemPromises: (() => Promise<void>)[] = [];

    for(let i = 0; i < files!.length && i + sliderItems.length < MAX_FILES; ++i){
      const file = files![i]

      if(file.size > MAX_SIZE_MB * 1024 * 1024){
        // TODO replace with modal
        alert(`Maximum size of image is ${MAX_SIZE_MB}`);
        continue;
      }
      const hash = await sha1(file);

      if(sliderItems.find((item) => item.hash === hash) !== undefined){
        // TODO replace with modal
        alert(`You have already uploaded ${file.name}`);
        continue;
      }

      handleItemPromises.push(async () => {
        try {
          const url = await fileToUrl(file);

          addItem({
            name: file.name,
            status: "uploading",
            image: url,
            hash: hash,
          } as ISliderItem);

          // request mock TODO
          await new Promise(r => setTimeout(r, 2000));
          setStatus(hash, "ok");
        }
        catch(e){
          setStatus(hash, "error");
        }
      });
    }

    await Promise.all(handleItemPromises.map(promise => promise()));
  }

  const handleRemoveItem = (e: React.MouseEvent<SVGElement>) => {
    const itemHash = e.currentTarget.getAttribute('img-hash');
    removeItemByName(itemHash!);
  }

  const imageClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const index = e.currentTarget.getAttribute('item-index');

    setCurrentIndex(_ => +index!);
    setTranslateValue(_ => -(+index! * 100));
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    const touchDown = touchPosition

    if(touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) handleNext();
    if (diff < -5) handlePrev();
    setTouchPosition(null)
  }

  return (
    <>

    {sliderItems.filter(item => item.status === 'ok').length > 0
    ? (
    <Styled.SliderContainer>
      <Styled.SliderLeftButton onClick={handlePrev} >
        <ChevronLeft />
      </Styled.SliderLeftButton>
      <Styled.SliderRightButton onClick={handleNext}>
        <ChevronRight />
      </Styled.SliderRightButton>
      <Styled.SliderWrapper>
        <Styled.ImageWrapper sx={{transform: `translateX(${translateValue}%)`}} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        {sliderItems.filter(item => item.status === 'ok').map((item) => {
          return (
            <Styled.ImageWrapper key={item.hash}>
              <Styled.Image src={item.image} alt={item.name} />
            </Styled.ImageWrapper>
          )
        })
        }
        </Styled.ImageWrapper>
      </Styled.SliderWrapper>
    </Styled.SliderContainer>
    )
    : <></> // TODO Drag & Drop if no images

    }
    <Styled.GridContainer container>
      {sliderItems.map((item, index) => {
        return item.status === 'uploading'
        ? (
          <Styled.ItemWrapper key={item.hash}>
            <Styled.HoverLayout>
              <Styled.DeleteIcon onClick={handleRemoveItem} {...{"img-hash": item.hash}}/>
            </Styled.HoverLayout>
            <Styled.ProgressIcon />
          </Styled.ItemWrapper>
        )
        : item.status === 'ok'
        ? (
          <Styled.ItemWrapper key={item.hash} onClick={imageClickHandler} {...{"item-index": index}}>
            <Styled.HoverLayout>
              <Styled.DeleteIcon onClick={handleRemoveItem} {...{"img-hash": item.hash}}/>
            </Styled.HoverLayout>
            <img src={item.image} alt={item.name} />
          </Styled.ItemWrapper>
        )
        : (
          <Styled.ErrorItemWrapper key={item.hash}>
            <Styled.ErrorIcon color="error" onClick={handleRemoveItem} {...{"img-hash": item.hash}}/>
          </Styled.ErrorItemWrapper>
        )
      })

      }
      {sliderItems.length < MAX_FILES &&
        <Styled.UploadButton component="label">
          <Styled.AddIcon/>
          <Styled.UploadBtnTypography >Upload</Styled.UploadBtnTypography>
          <input hidden accept="image/*" multiple type="file" onChange={inputChangeHandler}  />
        </Styled.UploadButton>
      }

    </Styled.GridContainer>

    </>
  )
}

export default ImageSlider;