# PZSP2-22Z-Z11

## Temat projektu - kolekcja

### System wspomagający zarządzanie kolekcją przedmiotów
Aktualne trendy rosnącej świadomości konsumenckiej widać w
zainteresowaniach i potrzebie sprzedaży/ zakupu rzeczy używanych, czy też
pozyskiwania/ pozbywania się ich w alternatywny sposób (recykling,
oddawanie). Zbuduj narzędzie wspomagające indywidualnego użytkownika/
grupę domowników przy inwentaryzacji i obrocie przedmiotami używanymi.
System powinien ułatwiać analizę kolekcji ze względu na różne kryteria
(kategoria, wartość, stan, etc.), wspomagać jej wizualizację oraz ułatwiać
lokalizację.

## Instrukcja lokalnego uruchomienia aplikacji
### Wymagane zależności:
* docker
* pip

### W celu uruchomienia aplikacji należy:
* stworzyć plik .env i umieścić go w głównym folderze naszego repozytorium (tym zawierającym plik docker-compose.yml)
* plik powinien zawierać linijkę `DB_PASSWORD={hasło-do-bazy}`, gdzie `hasło-do-bazy`, to dane uwierzytelniające w uczelnianej bazie Oracle otrzymane od zespołu projektowego
* wciąż znajdując się w głównym folderze wykonać w terminalu komendę 
`docker compose up -d`
* w wybranej przeglądarce internetowej udać się pod adres `localhost:3000`
* pierwsze uruchomienie aplikacji może trwać nawet do kilku minut ze względu na konieczność pobrania wszystkich zależności


## Ważne linki
### Trello:

 https://trello.com/b/Z3ZghMBT/projekt-kolekcja
### Figma:

 https://www.figma.com/file/wJOZkqIDr6yHwVIh8raVUp/Untitled?node-id=0%3A1

## Struktura repozytorium
* /backend
    * zawiera kod części backendowej systemu - api
* /frontend
    * zawiera kod części frontendowej systemu - aplikacja webowa
* /projekt_bazy_danych
    * pliki przedstawione do konsultacji z ekspertem - dr. inż. Tomaszem Traczykiem
* /user_experience
    * pliki konieczne do konsultacji z dr. inż. Jarosławem Chudziakiem
* /wymagania
    * krótki opis funkcjonalności naszej aplikacji
    * prosty diagram architektury systemu
* /minutki
    * krótkie notatki ze spotkań zespołu
