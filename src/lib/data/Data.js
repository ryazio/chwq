const Lessons = {
  1: {
    title: "Lesson 1",
    categories: [
      {
        catid: 1,
        title: "File Handling Basics",
        questions: [
          {
            id: 1,
            title: "Space Station: Log Daily Experiments",
            question: `At the Stellar Research Station, scientists conduct various experiments each day. You are tasked with creating a program to log these daily experiments to keep track of the station’s research activities. Instructions to perform the exercise:<br>
            1.Define a constant FILE_PATH with the value 'experiments_log.txt'. <br> 2. Use input() to ask the user to enter the name of the experiment conducted today. <br> 3.Concatenate a newline character \\\\n to the experiment name. <br> 4. Open the file in append mode and write the experiment entry to experiments_log.txt. <br> 5.Print a confirmation message saying, '🚀 Experiment logged successfully!'`,
            imageSrc: "/L1-C1-Q1.png",
            status: false,
          },
          {
            id: 2,
            title: "Mystic Library: Cataloging New Books",
            question: `In the heart of the Mystic Library, librarians are constantly adding new magical books to the collection. You need to create a program that helps catalog these new arrivals by recording their titles. <br> Instructions to perform the exercise: <br> 1. Define a constant 'FILE_PATH' with the value "library_catalog.txt". <br> 2. Use 'input()' to prompt the user to enter the title of a new book. <br> 3. Concatenate a newline character \\n to the book title. <br> 4. Open the file in append mode and write the book title to 'library_catalog.txt'. <br> 5. Print a message saying, "📚 New book added to the catalog!"`,
            status: false,
          },
          {
            id: 3,
            title: "Treasure Island: Log Pirate Discoveries",
            question: `On Treasure Island, pirates are uncovering hidden treasures and valuable artifacts. Create a program to log each discovery, ensuring that all treasures found are recorded for future reference. <br> Instructions to perform the exercise: <br> 1. Define a constant 'FILE_PATH' with the value '"pirate_discoveries.txt"'. <br> 2. Use 'input()' to ask the user to describe the treasure discovered. <br> 3. Concatenate a newline character '\\n' to the treasure description. <br> 4. Open the file in append mode and write the treasure description to 'pirate_discoveries.txt'. <br> 5. Print a message saying, "🏴‍☠️ Treasure discovery logged successfully!" <br> `,
            imageSrc: "/L1-C1-Q3.png",
            status: false,
          },
        ],
      },
      {
        catid: 2,
        title: "File Handling Advanced",
        questions: [
          {
            id: 1,
            title: "Research Lab: Recording Observation Data",
            question: `In a cutting-edge Research Lab, scientists are constantly adding data to their observation files. You’re responsible for logging each observation and tracking how much data is being added with each entry.  <br> Instructions to perform the exercise: 1. Define a constant 'FILE_PATH' with the value '"observations.txt"'.  <br> 2. Write a function 'get_file_size()' that retrieves and prints the size of 'observations.txt' in bytes. <br>  3. Use 'get_file_size()' to capture the file size before and after adding an entry. <br>  4. Take user input for the observation data and append it to 'observations.txt'. <br>  5. Calculate the difference in file size and print the bytes added with the message, "🔬 Observation added: [bytes] bytes".`,
            imageSrc: "/L1-C2-Q1.png",
            status: false,
          },
          {
            id: 2,
            title: "Captain’s Log: Tracking Daily Entries",
            question: `On the High Seas, Captain Windward records his thoughts and experiences in a Captain’s Log. Help him record each entry and track how much additional data is added with each log. <br> Instructions to perform the exercise: <br> 1. Define a constant 'FILE_PATH' with the value '"captains_log.txt"'. <br> 2. Write a function 'get_file_size()' that prints and returns the size of 'captains_log.txt' in bytes. <br> 3. Capture the initial file size using 'get_file_size()'. <br> 4. Prompt the user for a Captain’s Log entry and append it to the file. <br> 5. Calculate the difference in file size after writing the entry, and print, "🚢 Log entry added: [bytes] bytes".`,
            imageSrc: "/L1-C2-Q2.png",
            status: false,
          },
          {
            id: 3,
            title: "Recipe Book: Adding New Recipes",
            question: `In the Gourmet Kitchen, a chef records new recipes in a digital recipe book. Each time a recipe is added, you need to track the increase in file size to see how much data was added. <br> Instructions to perform the exercise: <br> 1. Define a constant 'FILE_PATH' with the value '"recipes.txt"'. <br> 2. Write a function 'get_file_size()' to print and return the size of 'recipes.txt' in bytes. <br> 3. Capture the initial file size with 'get_file_size()'. <br> 4. Prompt the user for a new recipe entry and append it to the file. <br> 5. Calculate the difference in file size, then print the message, "🍲 Recipe added: [bytes] bytes".`,
            imageSrc: "/L1-C2-Q3.png",
            status: false,
          },
        ],
      },
      {
        catid: 3,
        title: "Data Size Calculation",
        questions: [
          {
            id: 1,
            title: "Artifact Storage: Checking Space Before Storing Artifacts",
            question: `
            In the Museum of Ancient Artifacts, curators are cataloging new artifacts. Each artifact has a detailed description, but space is limited in the digital catalog. Write a program that checks if there’s enough free space before saving a new artifact’s details. <br> Instructions to perform the exercise: <br> 1. Define constants 'FILE_PATH' as 'artifact_catalog.txt' and 'MAX_SIZE' as '2000'. <br> 2. Write a function 'get_str_size(var)' to calculate the size of an artifact description. <br> 3. Get the file’s current size using 'get_file_size()' and calculate the free space available. <br> 4. Use 'input()' to prompt the user for an artifact description and calculate its size. <br> 5. Check if there’s enough free space for the description; if not, print a warning and exit. <br> 6. If there is space, write the artifact description to 'artifact_catalog.txt'.`,
            status: false,
          },
          {
            id: 2,
            title: "Astronaut Logs: Monitoring Space in the Logbook",
            question: `On the Starship Horizon, astronauts keep a detailed log of daily events, but the logbook has limited space. Write a program to check if there’s enough space before saving each log entry. <br> Instructions to perform the exercise: <br> 1. Define constants 'FILE_PATH' as "logbook.txt" and 'MAX_SIZE' as '1500'. <br> 2. Write a function 'get_str_size(var)' to calculate the size of each log entry. <br> 3. Get the file’s current size using 'get_file_size()' and calculate available free space. <br> 4. Use 'input()' to prompt the user for a log entry, then calculate its size. <br> 5. If there isn’t enough free space, print a message and exit; otherwise, write the log entry to 'logbook.txt'.`,
            imageSrc: "/L1-C3-Q2.png",
            status: false,
          },
        ],
      },
      {
        catid: 4,
        title: "Text Size Calculation",
        questions: [
          {
            id: 1,
            title: "Secret Messages: Calculate Encrypted Message Size",
            question: `In a top-secret agency, encrypted messages are recorded for each mission. To ensure efficiency, only the size of the message text is stored, excluding any file overhead. Write a program to calculate the size of the actual message text for record-keeping. <br> Instructions to perform the exercise: <br> 1. Define a function 'get_str_size(var)' that calculates and prints only the text size by subtracting the size <br> of an empty string. <br> 2. Use 'input()' to ask for a new encrypted message and calculate its text size. <br> 3. Print the message text size using the format "🕵️ Message text data: [bytes] bytes".`,
            imageSrc: "/L1-C4-Q1.png",
            status: false,
          },
        ],
      },
    ],
  },
  2: {
    title: "Lesson 2",
    categories: [
      {
        catid: 1,
        title: "File reading",
        questions: [
          {
            id: 1,
            title: "Class Grades: Displaying Student Scores",
            question: `In the School of Excellence, teachers need to review the latest test scores for each student. The scores are stored in a file named 'grades.csv', where each line contains a student's name and score. Write a program to read each student’s name and score, and display them for review.<br> Instructions to perform the exercise:<br> 1. Open the file 'grades.csv' in read mode.<br> 2. Loop through each line, splitting it by a comma to separate the name and score.<br> 3. Print each student’s name and score.<br> 4. Close the file once all lines are processed.`,
            status: false,
          },
          {
            id: 2,
            title: "Space Mission: Displaying Crew Points",
            question: `Onboard the SS Stellar Voyager, each crew member earns points for completing their daily tasks. The points are logged in a file named crew_points.csv, with each line containing the crew member's name and their accumulated points. Write a program to display each crew member’s name and points from the log. <br> Instructions to perform the exercise: <br> 1. Open the file 'crew_points.csv' in read mode. <br> 2. Use a loop to process each line, separating the name and points using 'split()'. <br> 3. Print each crew member’s name along with their points. <br> 4. Close the file once all data has been displayed.`,
            status: false,
          },
          {
            id: 3,
            title: "Gaming Leaderboard: Displaying High Scores",
            question: `In the Ultimate Gamers Tournament, players compete to achieve the highest scores. The scores are stored in a file named 'leaderboard.csv', with each line containing the player’s name and their score. Write a program to read the leaderboard and display each player’s name along with their high score. <br> Instructions to perform the exercise: <br> 1. Open the file 'leaderboard.csv' in read mode. <br> 2. Use a loop to process each line, splitting it by a comma to separate the player’s name and score. <br> 3. Print each player’s name with their score. <br> 4. Close the file after displaying all scores.`,
            status: false,
          },
        ],
      },
      {
        catid: 2,
        title: "File Appending",
        questions: [
          {
            id: 1,
            title: "Student Registration: Recording New Students",
            question: `At the School of Excellence, new students are being enrolled for the upcoming semester. Each student’s name and assigned student ID are stored in a file named 'students.csv'. Write a program that adds a new student’s name and ID to this file. <br> Instructions to perform the exercise: <br> 1. Define variables 'new_name' and 'new_id' for the student’s name and ID. <br> 2. Open the file 'students.csv' in append mode. <br> 3. Use 'file.write()' with an f-string to format the new student’s name and ID, separated by a comma. <br> 4. Close the file after adding the entry.`,
            status: false,
          },
          {
            id: 2,
            title: "Task Tracker: Logging Completed Tasks",
            question: `In the Task Manager app, users can log completed tasks to keep track of their productivity. Each entry includes the task name and time taken (in minutes). Write a program that adds a new completed task and the time taken to 'tasks.csv'. <br> Instructions to perform the exercise: <br>  1. Define variables 'task_name' and 'time_taken' for the task and its duration. <br> 2. Open the file 'tasks.csv' in append mode. <br> 3. Use 'file.write()' with an f-string to write the task name and time taken, separated by a comma. <br> 4. Close the file after adding the new task entry.`,
            status: false,
          },
          {
            id: 3,
            title: "Adventure Log: Recording Quest Progress",
            question: `In the world of Fantasy Quest, adventurers keep a log of completed quests. Each log entry includes the adventurer's name and the quest title. Write a program that adds a new quest entry to adventure_log.csv whenever a quest is completed. <br> Instructions to perform the exercise: <br> 1. Define variables adventurer_name and quest_title for the name and completed quest. <br> 2. Open the file adventure_log.csv in append mode. <br> 3. Use file.write() with an f-string to write the adventurer’s name and quest title, separated by a comma. <br> 4. Close the file after adding the quest entry.`,
            status: false,
          },
        ],
      },
      {
        catid: 3,
        title: "Sorting the data",
        questions: [
          {
            id: 1,
            title: "Leaderboard: Adding and Sorting Player Scores",
            question: `In the Ultimate Gaming Tournament, players' scores are stored in a file named 'leaderboard.csv'. When a new score is added, the list of scores needs to be updated and sorted alphabetically by player name. Write a program that reads the scores, adds the new entry, sorts the list, and updates the file. <br> Instructions to perform the exercise: <br> 1. Open 'leaderboard.csv' in read mode and use 'readlines()' to store all entries. <br> 2. Close the file and define 'new_name' and 'new_score' variables. <br> 3. Format the new entry, append it to the list, and sort it alphabetically by name. <br> 4. Open 'leaderboard.csv' in write mode, write each sorted entry, and close the file.`,
            status: false,
          },
          {
            id: 2,
            title: "Library Catalog: Adding and Sorting Book Titles",
            question: `At the Grand City Library, new books are frequently added to the catalog. Each entry consists of the book title and the author’s name. Write a program to read the list of books, add a new book, sort the list alphabetically, and update the file catalog.csv. <br> Instructions to perform the exercise: <br> 1. Open 'catalog.csv' in read mode and use 'readlines()' to store each line. <br> 2. Close the file and define 'new_title' and 'new_author' variables for the new entry. <br> 3. Format the new entry, append it to the list, and sort the list alphabetically by title. <br> 4. Open 'catalog.csv' in write mode, write each sorted entry, and close the file.`,
            status: false,
          },
          {
            id: 3,
            title: " Employee Directory: Adding and Sorting Employee Names",
            question: `In a growing company, employee names and their department codes are recorded in the Employee Directory. Each time a new employee is added, the directory must be updated and sorted alphabetically by employee name. Write a program to read, add, and sort employee entries, then update the 'directory.csv' file. <br> Instructions to perform the exercise: <br> 1. Open 'directory.csv' in read mode and use 'readlines()' to read all entries. <br> 2. Close the file and define 'new_name' and 'new_department' variables. <br> 3. Format the new entry, append it to the list, and sort the list alphabetically by name. <br> 4. Open 'directory.csv' in write mode, write each sorted entry, and close the file.`,
            status: false,
          },
        ],
      },
      {
        catid: 4,
        title: "Advanced Sorting",
        questions: [
          {
            id: 1,
            title: " Tournament Rankings: Adding and Sorting by Points",
            question: `In a Worldwide Chess Tournament, player rankings are based on accumulated points, which are recorded in 'rankings.csv'. When a new player’s points are added, the list is updated and sorted in descending order to display the top-ranked players first. <br> Instructions to perform the exercise: <br> 1. Open 'rankings.csv' in read mode and read all entries. <br> 2. Prompt the user for 'new_player' and 'new_points'. <br> 3. Define a function 'sort_by(entry)' to extract and return the points from each entry. <br> 4. Sort the list of entries in descending order by points. <br> 5. Write the sorted list back to 'rankings.csv'.`,
            status: false,
          },
        ],
      },
    ],
  },
  3: {
    title: "Lesson 3",
    categories: [
      {
        catid: 1,
        title: "Creating a table",
        questions: [
          {
            id: 1,
            title: "Astronaut Database: Creating a Space Mission Table",
            question: `At the International Space Agency, a database is being set up to track astronauts on various missions. Each entry includes the astronaut's name, their role on the mission, the mission’s launch year, and the total days spent in space. <br> Instructions to perform the exercise: <br> 1. Use 'CREATE TABLE' to define a table named 'space_mission'. <br> 2. Define columns for 'astronaut_name' (TEXT), 'role' (TEXT), 'launch_year' (INTEGER), and 'days_in_space' (INTEGER`,
            status: false,
          },
          {
            id: 2,
            title: "Haunted House Database: Creating a Ghost Sightings Table",
            question: `In the National Paranormal Research Society, ghost sightings are documented from various haunted locations. Each record includes the ghost's name, type (such as poltergeist, wraith, etc.), the location of the sighting, and the year it was reported. <br> Instructions to perform the exercise:<br> 1. Use 'CREATE TABLE' to define a table called 'ghost_sightings'.<br> 2. Define columns for 'ghost_name' (TEXT), 'ghost_type' (TEXT), 'location' (TEXT), and 'sighting_year' (INTEGER).`,
            status: false,
          },
          {
            id: 3,
            title: "Mythical Creatures Database: Creating a Creatures Table",
            question: `In the Academy of Mythical Studies, researchers are cataloging sightings of mythical creatures worldwide. They need a table to store each creature’s name, type (e.g., dragon, phoenix), habitat (forest, mountain, etc.), and estimated age. <br> Instructions to perform the exercise: <br> 1. Use 'CREATE TABLE' to define a table named 'creatures'. <br> 2. Define columns for 'creature_name' (TEXT), 'creature_type' (TEXT), 'habitat' (TEXT), and 'estimated_age' (INTEGER).`,
            staus: false,
          },
        ],
      },
      {
        catid: 2,
        title: "Primary Key & Data Types",
        questions: [
          {
            id: 1,
            title: "Secret Agent Database: Creating an Agent Roster Table",
            question: `In the International Espionage Agency, agents are tracked in a secure database to monitor their missions and clearance levels. Each agent is assigned a unique ID, and the database records their name, assigned mission code, current mission stage, and their clearance level (1-5). <br> Instructions to perform the exercise: <br> 1. Use 'CREATE TABLE' to define a table called 'agents'. <br> 2. Define columns for 'id' (INTEGER PRIMARY KEY AUTOINCREMENT), 'name' (TEXT), 'mission_code' (TEXT), 'current_stage' (INTEGER), and 'clearance_level' (INTEGER).`,
            status: false,
          },
          {
            id: 2,
            title: "Pet Training Center: Creating a Pet Progress Table",
            question: `At the Happy Tails Pet Training Center, trainers need to monitor the progress of each enrolled pet. Each pet is assigned a unique ID, and the table records the pet’s name, assigned training program code, current lesson number, and performance score. <br> Instructions to perform the exercise: <br> 1. Use 'CREATE TABLE' to define a table called 'pet_progress'. <br> 2. Define columns for 'id' (INTEGER PRIMARY KEY AUTOINCREMENT), 'pet_name' (TEXT), 'program_code' (TEXT), 'current_lesson' (INTEGER), and 'performance_score' (INTEGER).`,
            status: false,
          },
        ],
      },
      {
        catid: 3,
        title: "Alter Table",
        questions: [
          {
            id: 1,
            title: "Robot Database: Adding Programming Language Preference",
            question: `In the Advanced Robotics Lab, each robot has been cataloged in a 'robots' table, which includes various robot characteristics. The engineers want to add a new column to track each robot’s primary programming language, with 'Python' as the default language for any robot not yet assigned a specific language. <br> Instructions to perform the exercise: <br> 1. Use 'ALTER TABLE' to modify the existing 'robots' table. <br> 2. Add a column 'programming_language' of type 'TEXT'. <br> 3. Set the default value of 'programming_language' to 'Python'.`,
            status: false,
          },
          {
            id: 2,
            title: "Explorer Profiles: Adding Favorite Terrain",
            question: `At the Global Explorer Network, explorers' profiles are stored in a table called 'explorers'. Recently, the network has decided to track each explorer's preferred terrain (e.g., mountains, forests). By default, explorers who haven't specified a preference will have 'Forest' as their default favorite terrain. <br> Instructions to perform the exercise: <br> 1. Use 'ALTER TABLE' to modify the 'explorers' table. <br> 2. Add a column 'fav_terrain' of type 'TEXT'. <br> 3. Set the default value of 'fav_terrain' to 'Forest'.`,
            status: false,
          },
        ],
      },
      {
        catid: 4,
        title: "Drop Table",
        questions: [
          {
            id: 1,
            title: "Fantasy Kingdom: Recreating the Kingdom’s Creatures Table",
            question: `In the Fantasy Kingdom Research Lab, mythical creature data was stored in a table named 'creatures'. Unfortunately, an error was discovered in the table design, requiring the table to be dropped and recreated with an additional column for habitat type. After recreating it, the 'habitat_type' column is added with the default value 'Unknown'. <br> Instructions to perform the exercise: <br> 1. Use 'DROP TABLE' to delete the existing 'creatures' table. <br> 2. Use 'CREATE TABLE' to redefine the 'creatures' table with columns for 'creature_name', 'creature_type', and <br> 'age'. <br> 3. Use 'ALTER TABLE' to add a column 'habitat_type' with the default value 'Unknown'.`,
            status: false,
          },
          {
            id: 2,
            title: "Spy Agency Database: Resetting Agent Records",
            question: `In the Global Spy Agency, agents’ data is stored in a table named 'agents'. For security reasons, the agency must occasionally delete all agent records and recreate the table structure. After creating the table, an additional column for 'clearance_level' is added with a default level of '1'. <br> Instructions to perform the exercise: <br> 1. Use 'DROP TABLE' to delete the existing 'agents' table. <br> 2. Use 'CREATE TABLE' to redefine the 'agents' table with columns for 'agent_name', 'mission', and <br> 'experience_years'. <br> 3. Use 'ALTER TABLE' to add a 'clearance_level' column with a default value of '1'.`,
            status: false,
          },
          {
            id: 3,
            title: "Astronaut Database: Recreating Mission Assignments Table",
            question: `At the Space Exploration Command Center, the 'missions' table is used to assign astronauts to space missions. Due to a change in mission tracking requirements, the existing 'missions' table needs to be removed and recreated with an additional column for 'mission_status', defaulting to 'Planned'. <br> Instructions to perform the exercise: <br> 1. Use 'DROP TABLE' to delete the existing 'missions' table. <br> 2. Use 'CREATE TABLE' to redefine the 'missions' table with columns for 'astronaut_name', 'mission_name', and <br> 'duration_days'. <br> 3. Use 'ALTER TABLE' to add a 'mission_status' column with the default value 'Planned'.`,
            status: false,
          },
        ],
      },
    ],
  },
  4: {
    title: "Leasson 4",
    categories: [
      {
        catid: 1,
        title: "Cat 1",
        questions: [
          {
            id: 1,
            title: "Jungle Database: Retrieving All Jungle Plants",
            question: `The Jungle Botanical Research Team wants a complete list of all jungle plants recorded in the 'jungle_plants' table to start cataloging species for conservation efforts. <br> Instructions to perform the exercise: <br> 1. Write a 'SELECT *' statement to retrieve all columns from the 'jungle_plants' table.`,
            status: false,
          },
          {
            id: 2,
            title: "Dinosaur Database: Retrieving All Dinosaur Records",
            question: `In the Dinosaur Research Facility, paleontologists need to review every dinosaur entry in the 'dinosaurs' table to prepare for a research report on dinosaur species. <br> Instructions to perform the exercise. <br> 1. Write a 'SELECT *' statement to retrieve all columns from the 'dinosaurs' table.`,
            status: false,
          },
          {
            id: 3,
            title: "Dragon Database: Retrieving Adult Dragons Only",
            question: `In the Dragon Archives, researchers want to retrieve records of dragons that are classified as adults in the 'dragons' table. The adult dragons have an 'age_class' value of 'adult'. <br> Instructions to perform the exercise. <br> 1. Write a 'SELECT *' statement to retrieve all columns from the 'dragons' table. <br> 2. Use 'WHERE' to filter for records where 'age_class' is 'adult'.`,
            status: false,
          },
          {
            id: 4,
            title: "Jungle Database: Retrieving Dangerous Animals Only",
            question: `In the Tropical Jungle Conservation Program, staff need to retrieve records of dangerous animals in the 'jungle_animals' table. Dangerous animals have a 'danger_level' of 'high'. <br> Instructions to perform the exercise .<br> 1. Write a 'SELECT *' statement to retrieve all columns from the 'jungle_animals' table .<br> 2. Use 'WHERE' to filter for records where 'danger_level' is 'high'.`,
            status: false,
          },
          {
            id: 5,
            title: "Dinosaur Database: Retrieving Specific Carnivores",
            question: `In the Dino Diet Study Program, researchers are focusing on carnivorous dinosaurs. They need to retrieve records for specific carnivores in the 'dinosaurs' table with IDs '350', '400', and '450'. <br> Instructions to perform the exercise .<br> 1. Write a 'SELECT *' statement to retrieve all columns from the 'dinosaurs' table .<br> 2. Use 'WHERE' with 'OR' to filter for dinosaurs with 'id' values of '350', '400', or '450'.`,
            status: false,
          },
          {
            id: 6,
            title:
              "Dragon Database: Retrieving Fire-Breathing and Winged Dragons",
            question: `In the Realm of Dragons, researchers are studying specific types of dragons based on their abilities. They need information on dragons that are either fire-breathing or have wings, stored in the 'dragons' table with 'ability' values of 'fire-breathing' and 'winged'. <br> Instructions to perform the exercise .<br> 1. Write a 'SELECT *' statement to retrieve all columns from the 'dragons' table .<br> 2. Use 'WHERE' with 'OR' to filter for dragons where 'ability' is either 'fire-breathing' or 'winged'.`,
            status: false,
          },
          {
            id: 7,
            title: "Jungle Database: Finding Animals by Habitat",
            question: `In the Jungle Conservation Program, environmental scientists are interested in animals that live in either the 'rainforest' or 'savanna' habitats, as stored in the 'jungle_animals' table. They need this information to monitor these ecosystems. <br> Instructions to perform the exercise:  <br> 1. Write a 'SELECT *' statement to retrieve all columns from the 'jungle_animals' table.  <br> 2. Use 'WHERE' with 'OR' to filter for animals where 'habitat' is either 'rainforest' or 'savanna'.`,
            status: false,
          },
        ],
      },
    ],
  },
  5: {
    title: "Lesson 5",
    categories: [
      {
        catid: 1,
        title: "Cat 1",
        questions: [
          {
            id: 1,
            title: "Robot Database: Creating Robot Profiles Table",
            question: `In the Advanced Robotics Lab, each robot is assigned a unique profile in the database. The table 'robots' needs to store a unique 'robot_id' for each robot, along with 'robot_name', a 'model' type, and a 'serial_number'. Only one robot can have a specific name or serial number, so these fields must be unique. Additionally, every robot must have a name and model assigned. <br> Instructions to perform the exercise: <br> 1. Use 'CREATE TABLE' to define a table called 'robots'. <br> 2. Define columns for 'robot_id' (INTEGER PRIMARY KEY AUTOINCREMENT), 'robot_name' (TEXT UNIQUE NOT NULL), 'model' (TEXT NOT NULL), and 'serial_number' (TEXT UNIQUE).`,
            status: false,
          },
          {
            id: 2,
            title: "Robot Database: Creating Robot Maintenance Log Table",
            question: `In the RoboWorks Maintenance Division, each robot’s maintenance activities are tracked. The 'maintenance_log' table stores a unique 'log_id', the robot’s 'robot_id' (linked to each robot’s profile), the 'technician_name' who performed the maintenance, and a 'maintenance_date'. Each robot should only have one maintenance log entry per day. <br> Instructions to perform the exercise: <br> 1. Use 'CREATE TABLE' to define a table named 'maintenance_log'. <br> 2. Define columns for 'log_id' (INTEGER PRIMARY KEY AUTOINCREMENT), 'robot_id' (INTEGER NOT NULL), 'technician_name' (TEXT NOT NULL), and 'maintenance_date' (TEXT NOT NULL, UNIQUE with 'robot_id').`,
            status: false,
          },
        ],
      },
      {
        catid: 2,
        title: "Cat 2",
        questions: [
          {
            id: 1,
            title: "Space Missions Database: Adding New Destinations",
            question: `In the Galactic Exploration Command, new interstellar destinations are constantly being added to the mission plan. The table 'destinations' logs each location and its distance from Earth in light-years. You need to add a new destination called "Andromeda Galaxy," located 2,537,000 light-years from Earth. <br> Instructions to perform the exercise: <br> 1. Use 'INSERT INTO' to add a new record to the 'destinations' table. <br> 2. Insert the name of the destination ('Andromeda Galaxy') and its distance ('2537000' in light-years).`,
            status: false,
          },
          {
            id: 2,
            title: "Crew Database: Adding New Crew Members",
            question: `In the Galactic Fleet Roster, each crew member’s information is recorded in the 'crew_members' table. You need to add a new crew member named "Captain Zane Carter," whose role is "Commander," with an experience level of '61.5' months. <br> Instructions to perform the exercise: <br> 1. Use 'INSERT INTO' to add a new entry to the 'crew_members' table. <br> 2. Insert the crew member’s name ('Captain Zane Carter'), role ('Commander'), and experience ('61.5' months).`,
            status: false,
          },
        ],
      },
      {
        catid: 3,
        title: "Cat 3",
        questions: [
          {
            id: 1,
            title: "Robot Missions Database: Adding New Robot Task Assignments",
            question: `In the RoboMissions Program, every robot is assigned a specific mission role with a unique identifier. The table 'robot_tasks' logs each robot's 'robot_name', 'task_role', and 'battery_life' in percentage. Add a new entry for a robot named "XR-77," assigned as a "Surveyor" with '85.6' percent battery life remaining. <br> Instructions to perform the exercise: <br> 1. Use 'INSERT INTO' to add a new entry to the 'robot_tasks' table, specifying column names 'robot_name', <br> 'task_role', and 'battery_life'. <br> 2. Insert values for 'robot_name' ('XR-77'), 'task_role' ('Surveyor'), and 'battery_life' ('85.6').`,
            status: false,
          },
          {
            id: 2,
            title: "Spacecraft Supplies Database: Adding Cargo Information",
            question: `In the Interstellar Fleet Command, each spacecraft carries a specific load of essential supplies. The 'cargo_inventory' table records the 'item_name', 'category', and 'weight_kilograms' of each supply item. Add a new record for a cargo item "Oxygen Tank" categorized under "Life Support" with a weight of '120.5' kilograms. <br> Instructions to perform the exercise: <br>  1. Use 'INSERT INTO' to add a new record to the 'cargo_inventory' table, specifying columns 'item_name', 'category', and 'weight_kilograms'. <br>  2. Insert values for 'item_name' ('Oxygen Tank'), 'category' ('Life Support'), and 'weight_kilograms' ('120.5').`,
            status: false,
          },
        ],
      },
      {
        catid: 4,
        title: "Cat 4",
        questions: [
          {
            id: 1,
            title: "Robot Missions Database: Adding Multiple Robots",
            question: `In the Galactic Robo-Missions Program, new robots are frequently added to the mission roster. The 'robot_tasks' table tracks each robot's name, mission role, and battery life percentage. The lab needs to add three new robots: "Zeta-21" as a "Scout" with 90.1% battery life, "Rover-X9" as a "Miner" with 76.3% battery life, and "Titan-88" as a "Transporter" with 65.4% battery life. <br> Instructions to perform the exercise: <br> 1. Use 'INSERT INTO' to add multiple records to the 'robot_tasks' table, specifying the columns 'robot_name', <br> 'task_role', and 'battery_life'. <br> 2. Insert values for each robot's name, role, and battery life in a single command.`,
            status: false,
          },
          {
            id: 2,
            title: "Dino Research Database: Adding Multiple Dinosaur Sightings",
            question: `In the Prehistoric Observation Lab, researchers track recent sightings of dinosaurs. The 'dinosaur_sightings' table logs the dinosaur species, location, and estimated weight in kilograms. The research team has observed three new dinosaurs: "Tyrannosaurus Rex" in "Sector A" weighing 9000 kg, "Triceratops" in "Sector B" weighing 6800 kg, and "Velociraptor" in "Sector D" weighing 450 kg. <br> Instructions to perform the exercise: <br> 1. Use 'INSERT INTO' to add multiple records to the 'dinosaur_sightings' table, specifying columns 'species', <br> 'location', and 'weight_kg'. <br> 2. Insert values for each dinosaur's species, location, and weight in a single command.`,
            status: false,
          },
        ],
      },
      {
        catid: 5,
        title: "Cat 5",
        questions: [
          {
            id: 1,
            title: "Robot Database: Removing Retired Robots from the Roster",
            question: `In the Advanced Robotics Lab, robots that are no longer functional are retired from the active roster. The lab needs to remove a robot with 'robot_id = 4' from the 'robots' table as it’s been decommissioned and is no longer part of the fleet. <br> Instructions to perform the exercise: <br> 1. Use 'DELETE FROM' to remove a specific record from the 'robots' table. <br> 2. Use 'WHERE' to specify the condition 'robot_id = 4'.`,
            status: false,
          },
          {
            id: 2,
            title: "Robot Database: Updating a Robot’s Mission Role",
            question: `In the Robotic Exploration Program, certain robots are occasionally reassigned to new roles based on mission needs. The robot with 'robot_id = 2' in the 'robots' table needs to have its 'mission_role' updated to 'Reconnaissance' to better suit the current exploration objectives.  <br> Instructions to perform the exercise: <br> 1. Use 'UPDATE' to modify the 'mission_role' column of a specific record in the 'robots' table. <br> 2. Use 'SET' to assign the new role 'Reconnaissance'. <br> 3. Use 'WHERE' to specify the condition 'robot_id = 2'.`,
            status: false,
          },
        ],
      },
    ],
  },
  6: {
    title: "Lesson 6",
    categories: [
      {
        catid: 1,
        title: "Cat 1",
        questions: [
          {
            id: 1,
            title: "Connecting to the Artifacts Database",
            question: `In the Ancient Atlantis Archives, historians have cataloged various artifacts from Atlantis, preserved in a database named 'artifacts.db'. To access the data for research, historians must first establish a secure connection to the database. <br> Instructions to perform the exercise: <br> 1. Use 'sqlite3.connect()' to connect to the 'artifacts.db' file. <br> 2. Print a message confirming that the connection has been successfully established. <br> 3. Use 'connection.close()' to close the connection and print a message confirming it’s closed.`,
            status: false,
          },
          {
            id: 2,
            title: "Connecting to the Lost Treasures Database",
            question: `The Society of Atlantean Treasures maintains records of the legendary treasures believed to be lost with the sinking of Atlantis. These records are stored in 'treasures.db', and archaeologists must establish a connection to the database to access these secrets. <br> Instructions to perform the exercise: <br> 1. Use 'sqlite3.connect()' to connect to the 'treasures.db' file. <br> 2. Print a message confirming that the connection has been successfully established. <br> 3. Use 'connection.close()' to properly close the connection and print a message confirming that it’s closed.`,
            status: false,
          },
        ],
      },
      {
        catid: 2,
        title: "Cat 2",
        questions: [
          {
            id: 1,
            title: "Displaying Artifact Collection",
            question: `In the Atlantis Artifact Repository, archaeologists frequently need to view all artifact details stored in the 'artifact_collection' table. The function 'show_artifacts()' will retrieve and display the data whenever the user inputs '1' as a command, providing quick access to the entire collection. <br> Instructions to perform the exercise: <br> 1. Define a function 'show_artifacts()' to retrieve all rows from the 'artifact_collection' table using <br> 'SELECT *'. <br> 2. Use 'cursor.execute()' to execute the SQL statement and 'cursor.fetchall()' to retrieve the data. <br> 3. Loop through the results and print each artifact record. <br> 4. Set up an infinite loop and call 'show_artifacts()' if the command is '1'.`,
            status: false,
          },
          {
            id: 2,
            title: "Displaying Lost Treasure Records",
            question: `In the Atlantis Treasures Archive, historians document each piece of lost treasure in the 'lost_treasures' table. With the 'show_treasures()' function, the user can view all records whenever the command '1' is entered, enabling access to the full list of lost treasures from Atlantis. <br> Instructions to perform the exercise: <br> 1. Define a function 'show_treasures()' to retrieve all rows from the 'lost_treasures' table using 'SELECT *'. <br> 2. Use 'cursor.execute()' to run the SQL statement and 'cursor.fetchall()' to retrieve all data. <br> 3. Loop through the results and print each treasure record. <br> 4. Set up an infinite loop and call 'show_treasures()' if the command is '1'.`,
            status: false,
          },
        ],
      },
      {
        catid: 3,
        title: "Cat 3",
        questions: [
          {
            id: 1,
            title: "Reactivating Ancient Defense Systems",
            question: `In the Atlantis Security Center, engineers are tasked with reactivating defense systems to safeguard Atlantis. The 'defense_systems' table logs each system's status and priority level. The 'activate_defenses()' function will set all systems with 'priority = 'backup' to 'online' status whenever the command '2' is entered. <br> Instructions to perform the exercise: <br> 1. Define a function 'activate_defenses()' that updates all rows in the 'defense_systems' table where 'priority' is 'backup', setting 'status' to 'online'. <br> 2. Use 'cursor.execute()' to execute the 'UPDATE' statement, followed by a confirmation message printout. <br> 3. Set up an infinite loop, and call 'activate_defenses()' if the command is '2'.`,
            status: false,
          },
          {
            id: 2,
            title: "Reactivating Power Grids",
            question: `In the Atlantis Energy Control Center, technicians monitor and maintain ancient power grids stored in the 'power_grids' table. To conserve energy, backup power grids are kept offline until needed. The 'activate_power_grids()' function will set the status of all grids with 'priority = 'backup' to 'online' when command '2' is entered. <br> Instructions to perform the exercise: <br> 1. Define a function 'activate_power_grids()' that updates the 'status' of all rows in the 'power_grids' table where 'priority' is 'backup' to 'online'. <br> 2. Use 'cursor.execute()' to execute the 'UPDATE' statement and print a message confirming activation. <br> 3. Set up an infinite loop, and call 'activate_power_grids()' if the command is '2'.`,
            status: false,
          },
        ],
      },
      {
        catid: 4,
        title: "Cat 4",
        questions: [
          {
            id: 1,
            title: "Activating Backup Defense Systems and Printing Columns",
            question: `In the Atlantis Security Command Center, defense systems need to be reactivated and their current status reviewed. The 'activate_defenses()' function will bring all backup systems in 'defense_systems' online. The 'show_defense_systems()' function will call 'print_columns("defense_systems")' to display all column names in the 'defense_systems' table for better data understanding. <br> Instructions to perform the exercise: <br> 1. Define a function 'activate_defenses()' to set 'status' to 'online' for all rows with 'priority = 'backup' in 'defense_systems', then commit the changes and print a confirmation message. <br> 2. Define a 'print_columns(table_name)' function to fetch and print column names from any given table using 'PRAGMA_TABLE_INFO'. <br> 3. Define 'show_defense_systems()' to call 'print_columns("defense_systems")'. <br> 4. In the infinite loop, call 'activate_defenses()' with command '2' and 'show_defense_systems()' with command '3'.`,
            status: false,
          },
          {
            id: 2,
            title:
              "Activating Power Backup Systems and Displaying Column Information",
            question: `In the Atlantis Energy Control Center, technicians are responsible for managing the power grid. When backup systems need to be activated, the 'activate_power_backups()' function sets them online in the 'power_grids' table. The 'show_power_systems()' function displays column names in the 'power_grids' table by calling 'print_columns("power_grids")', helping technicians understand the structure of stored data. <br> Instructions to perform the exercise: <br> 1. Define a function 'activate_power_backups()' to set 'status' to 'online' for all rows with 'priority = 'backup' in 'power_grids', then commit the changes and print a confirmation. <br> 2. Define 'print_columns(table_name)' to retrieve and print column names from any table using 'PRAGMA_TABLE_INFO'. <br> 3. Define 'show_power_systems()' to call 'print_columns("power_grids")'. <br> 4. In the infinite loop, call 'activate_power_backups()' with command '2' and 'show_power_systems()' with command '3'.`,
            status: false,
          },
        ],
      },
    ],
  },
  7: {
    title: "Lesson 9",
    categories: [
      {
        catid: 1,
        title: "Cat 1",
        questions: [
          {
            id: 1,
            title: "Linking Artifacts with Pyramid Sites",
            question: `In the Pyramid Archaeology Center, researchers document artifacts found at different pyramid sites. They want to link the 'pyramid_sites' table to the 'artifacts' table by adding an 'artifact_id' column in 'pyramid_sites', which references 'artifact_id' in 'artifacts'. Then, they will update 'pyramid_sites' to assign 'artifact_id = 3' to 'site_id = 1'. <br> Instructions to perform the exercise: <br> 1. Use 'ALTER TABLE' to add an 'artifact_id' column to 'pyramid_sites', referencing 'artifact_id' in the 'artifacts' table. <br> 2. Use 'UPDATE' to set 'artifact_id = 3' in 'pyramid_sites' for the record where 'site_id = 1'.`,
            status: false,
          },
          {
            id: 2,
            title: "Linking Pharaohs with Burial Chambers",
            question: `At the Museum of Ancient Egypt, historians link pharaohs with their respective burial chambers in pyramids. They want to add a 'pharaoh_id' column to the 'burial_chambers' table, referencing 'pharaoh_id' in the 'pharaohs' table. Then, they will set 'pharaoh_id = 5' for the burial chamber with 'chamber_id = 1'. <br> Instructions to perform the exercise: <br> 1. Use 'ALTER TABLE' to add a 'pharaoh_id' column to 'burial_chambers', referencing 'pharaoh_id' in the 'pharaohs' table. <br> 2. Use 'UPDATE' to set 'pharaoh_id = 5' in 'burial_chambers' where 'chamber_id = 1'.`,
            status: false,
          },
          {
            id: 3,
            title: "Assigning Engineers to Pyramid Constructions",
            question: `The Ancient Construction Records of Egypt detail engineers who oversaw pyramid constructions. The 'pyramids' table needs to be updated with an 'engineer_id' column to reference 'engineer_id' in the 'engineers' table. Once linked, the 'engineer_id' for the pyramid with 'pyramid_id = 2' should be updated to '7'. <br> Instructions to perform the exercise: <br> 1. Use 'ALTER TABLE' to add an 'engineer_id' column to 'pyramids', referencing 'engineer_id' in the 'engineers' table. <br> 2. Use 'UPDATE' to set 'engineer_id = 7' in 'pyramids' where 'pyramid_id = 2'.`,
            status: false,
          },
        ],
      },
      {
        catid: 2,
        title: "Cat 2",
        questions: [
          {
            id: 1,
            title: "Assigning Restoration Experts to Pyramids",
            question: `In the Ancient Pyramids Preservation Society, each pyramid is periodically assigned a restoration expert to maintain its structure. The 'pyramids' table needs an 'expert_id' column to reference 'expert_id' in the 'restoration_experts' table. Once the column is added, the 'expert_id' for the pyramid with 'pyramid_id = 1' should be set to '1', and 'expert_id' for all pyramids with 'pyramid_id >= 2' should be set to '2'. <br> Instructions to perform the exercise: <br> 1. Use 'ALTER TABLE' to add an 'expert_id' column to 'pyramids', referencing 'expert_id' in 'restoration_experts'. <br> 2. Use 'UPDATE' to set 'expert_id = 1' for the pyramid with 'pyramid_id = 1'. <br> 3. Use another 'UPDATE' to set 'expert_id = 2' for all pyramids with 'pyramid_id >= 2'.`,
            status: false,
          },
          {
            id: 2,
            title: "Assigning Archaeologists to Excavation Sites",
            question: `The Egyptian Archaeology Institute assigns archaeologists to manage different excavation sites. To organize this, they need to add an archaeologist_id column to the excavation_sites table, referencing archaeologist_id in archaeologists. Once added, they will set archaeologist_id = 3 for the site with site_id = 1 and archaeologist_id = 4 for all sites with site_id >= 2. <br> Instructions to perform the exercise: <br> 1. Use ALTER TABLE to add an archaeologist_id column to excavation_sites, referencing archaeologist_id in archaeologists. <br> 2. Use UPDATE to set archaeologist_id = 3 for the site with site_id = 1. <br> 3. Use another UPDATE to set archaeologist_id = 4 for all sites with site_id >= 2.`,
            status: false,
          },
          {
            id: 3,
            title: "Assigning Historians to Artifact Exhibits",
            question: `In the National Museum of Ancient Egypt, historians are assigned to curate specific artifact exhibits in the 'artifact_exhibits' table. To manage this, a 'historian_id' column is added to 'artifact_exhibits', referencing 'historian_id' in 'historians'. The 'historian_id' for the exhibit with 'exhibit_id = 1' should be set to '5', and for all exhibits with 'exhibit_id >= 2', 'historian_id' should be set to '6'. <br> Instructions to perform the exercise: <br> 1. Use 'ALTER TABLE' to add a 'historian_id' column to 'artifact_exhibits', referencing 'historian_id' in 'historians'. <br> 2. Use 'UPDATE' to set 'historian_id = 5' for the exhibit with 'exhibit_id = 1'. <br> 3. Use another 'UPDATE' to set 'historian_id = 6' for all exhibits with 'exhibit_id >= 2'.`,
            status: false,
          },
        ],
      },
      {
        catid: 3,
        title: "Cat 3",
        questions: [
          {
            id: 1,
            title: "Viewing Artifact Locations and Curators",
            question: `In the National Museum of Ancient Egypt, curators want a list of artifacts on display along with the exhibit room, artifact type, and curator responsible for each item. This information is stored across the 'artifacts', 'exhibit_rooms', and 'curators' tables. Use a query that joins these tables to display 'artifact_name', 'room_name', 'artifact_type', and 'curator_name' for each exhibit. <br> Instructions to perform the exercise: <br> 1. Use 'JOIN' to combine the 'artifacts', 'exhibit_rooms', and 'curators' tables, linking 'room_id' and 'curator_id' using 'USING'. <br> 2. Write a 'SELECT' statement to display 'artifact_name', 'room_name', 'artifact_type', and 'curator_name' from the combined tables.`,
            status: false,
          },
          {
            id: 2,
            title: "Listing Pharaohs, Pyramids, and Architects",
            question: `In the Ancient Egyptian Archives, historians track which pharaohs were entombed in specific pyramids and who designed each pyramid. This information is spread across the pharaohs, pyramids, and architects tables. Use a query that joins these tables to display pharaoh_name, pyramid_name, and architect_name for each pyramid. <br> Instructions to perform the exercise: <br> 1. Use JOIN to connect the pharaohs, pyramids, and architects tables, linking pharaoh_id and architect_id with USING. <br> 2. Write a SELECT statement to display pharaoh_name, pyramid_name, and architect_name for each record.`,
            status: false,
          },
          {
            id: 3,
            title: "Viewing Excavation Sites and Assigned Researchers",
            question: `The Pyramid Excavation Committee keeps records of excavation sites, the types of findings uncovered, and the lead researcher for each site. The 'excavation_sites', 'findings', and 'researchers' tables store this information. Use a query that joins these tables to display 'site_name', 'finding_type', and 'researcher_name' for each excavation site. <br> Instructions to perform the exercise: <br> 1. Use 'JOIN' to combine the 'excavation_sites', 'findings', and 'researchers' tables, linking 'finding_id' and 'researcher_id' with 'USING'. <br> 2. Write a 'SELECT' statement to display 'site_name', 'finding_type', and 'researcher_name' for each record.`,
            status: false,
          },
        ],
      },
    ],
  },
  10: {
    title: "Lesson 10",
    categories: [
      {
        catid: 1,
        title: "Cat 1",
        questions: [
          {
            id: 1,
            title:
              "Galactic Database: Counting Hazardous Asteroids Threatening Civilizations",
            question: `In the Interstellar Defense Network, various interstellar civilizations collaborate to monitor asteroids that may pose a threat. Each asteroid is cataloged in the 'asteroids' table with its 'hazard' status. Use a query to count the number of hazardous asteroids ('hazard = 'false') that could impact any of the civilizations. <br> Instructions to perform the exercise: <br> 1. Use 'SELECT COUNT(*)' to count the number of hazardous asteroids <br> 2. Use 'WHERE' to filter for records where 'hazard = 'false'`,
            status: false,
          },
          {
            id: 2,
            title:
              "Galactic Database: Ordering Asteroids by Closest Approach to Civilizations",
            question: `In the Alliance of Cosmic Observers, astronomers from various interstellar civilizations track asteroids’ proximity to inhabited planets. The 'asteroids' table records the 'miss_distance' of each asteroid. Use a query to display all asteroid records, ordered by their closest approach distance ('miss_distance') to prioritize monitoring. <br> Instructions to perform the exercise:. <br> 1. Use 'SELECT *' to retrieve all columns from the 'asteroids' table. <br> 2. Use 'ORDER BY' to sort the results by 'miss_distance' in ascending order`,
            status: false,
          },
          {
            id: 3,
            title:
              "Galactic Database: Listing Largest Asteroids First for Mining Opportunities",
            question: `In the Interstellar Mining Consortium, civilizations search for large asteroids with valuable resources. The 'asteroids' table records the 'diameter' of each asteroid. Use a query to list all asteroids, ordered by 'diameter' in descending order, so the largest asteroids are prioritized for mining analysis.<br> Instructions to perform the exercise: <br> 1. Use 'SELECT *' to retrieve all columns from the 'asteroids' table <br> 2. Use 'ORDER BY' to sort the results by 'diameter' in descending order ('DESC')`,
          },
        ],
      },
    ],
  },
};
export default Lessons;
