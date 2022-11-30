## User personas:
	- Collection Administrator (e.g. parent, homeowner)
	- User (e.g. child, teenager)
	- Super User (owner of the application)
	
## User stories:
    1) As a user, I want to have access to statistics of my collection to give me a better understanding of what items I own
    2) As an administrator I want to have an ability to add or remove items to and from my collection so that the system reflects real state of my collection
    3) As a user I want to be able to filter items by category because that would help me not get overwhelmed with excessive amounts of data
    4) As an administrator I want to be able to create auctions on outside platforms such as Allegro, so that I can quickly get rid of unnecessary items
    5) As an administrator I want to be able to add a photo to an item profile because I have to be able to identify them easier
    6) As an administrator I want to be able to add other users to my collection to allow my family to see our items
    7) As an administrator I want to manage other users’ permissions on managing my collection to avoid unwanted people accessing my data
    8) As a user, I want to be able to login/logout/create/update account because it’s needed for security purposes
    9) As an administrator, I want to be able to remove users from my collection in case I no longer want them to have access
    10) As a superuser, I want to be able to delete users/collections to make it easier for me to maintain the system
    11) As a superuser, I want to be able to add fields that describe the items to have more flexibility in the future

## Use cases:
1.

    Name: Login
    Description: Login to a user account
    Used by: Anyone
    Preconditions: Had an account
    Success end conditions: Know the login and the password
    Failed end conditions: Don’t remember the password, account doesn’t exist
    Actors: Super User, Collection Administrator, User
    Trigger: Go directly to the app site
    Steps, actions: 
    i. Fill username
    ii. Fill password
    iii. Click to login button
        iv.a Success: Go directly to the app site.
        iv.b Fail: Stay in login page with red warning about failing authentication.
2.

    Name: Create item
    Description: Create item and save it to the user’s collection
    Used by: Parent, homeowner
    Preconditions: Login the Collection Administrator account, exist the collection for this item, you had all the info about this item
    Success end conditions: Fill all the fields
    Failed end conditions: Lack of any fields / you don’t have permission
    Actors: Collection Administrator
    Trigger: Create new item for a collection.
    Steps, actions: 
    Click the button to add item
    Fill: name / description / category / condition / price / location
    Upload photos
    Click button to save all changes
    Success: An item is created and we leave the page and go to the statistics page
    Failure: The item wasn’t created, a warning message pop up in the place we fill it wrong/missing
3.

    Name: Create collection
    Description: Create a collection in which the administrator can put all of the items their family owns
    Used by: Parent, homeowner, etc.
    Preconditions: An user is logged into the app
    Success end conditions: Fill all the fields about the info of the collection
    Failed end conditions: Lack of any necessary field
    Actors: Any user
    Trigger: Create a new collection.
    Steps, actions: 
    Click to the button to create collection
    Fill the name / description
    Add co-users and grant them specific permissions
    Click create button to create
    Success: Create collection regarding to the things we filled
    Failure: The collection wasn’t created, a warning message pops up in the place we fill it wrong/missing

4.

    Name: Add user to a collection
    Description: Add user to a collection and choose their permission level
    Used by: Owner of the collection or similar permission level co-user
    Preconditions: Logged in to an account with sufficient permission level / collection exists / there is another account to add to the collection
    Success end conditions: The user you add exists, the collection exists
    Failed end conditions: Not all the options were selected
    Actors: Collection Administrator
    Trigger: Adding user to collection
    Steps, actions: 
    Click to collection settings
    Click to the collection you want to modify user
    Click adding user inside the collection
    Typing username you want
    Choose the permission level from the list
    Save him
    Success: Add user to collection with permission
    Failure: A warning message pop up in the place we fill it wrong/missing
5.

    Name: Filter products by category
    Description: Allow the user to choose to display items that are only in the chosen category
    Used by: Anyone
    Preconditions: Had an account, has access to the collection
    Success end conditions: always a success
    Failed end conditions: -
    Actors: Collection Administrator, User
    Trigger: Showing the list of items with the category
    Steps, actions: 
    Click to the static section
    Click to the filter button
    Choose the category
    Success: Items from the chosen category are shown


