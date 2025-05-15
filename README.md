# BigBang
Script to iterate through 1 to 100 and replace any number divisible by 3 with the word 'BIG' number divisible by 5 with the word 'BANG'. If the number is divisible by 3 and 5, replace it with 'BIG BANG'. Then generate the array and output to ‘output.json’ file.

## Description
- Replaces numbers divisible by 3 with "BIG"
- Replaces numbers divisible by 5 with "BANG"
- Replaces numbers divisible by both 3 and 5 with "BIGBANG"
- Numbers not divisible by 3 or 5 will be kept as strings

- The final result is saved to 'output.json' in the same folder.
- If 'output.json' file is already exists, the program will delete the old file and replace it with the new script

## How to Run (bigBang.js)

### 1. Open Command Prompt (cmd)

### 2. Navigate to the folder

cd Path\To\BigBang\ProjectFolder (Replace Path\To\BigBang\ProjectFolder with the actual folder location of your files)

### 3. Run the script

node bigBang.js

### 4. Output

If output.json already exists, it will be deleted and recreated.
A new output.json file will be created containing the result in JSON format.

## How to View Output (output.json)

### Option 1: View in Code Editor
a) Open the folder where output.json is saved.
b) Right-click on output.json and choose "Open with" → Any Code Editor (e.g., VS Code, Notepad++).

### Option 2: Use Command Prompt (cmd)
a) cd Path\To\Output.json\Folder (Replace Path\To\Output.json\Folder with the actual folder location of your files)
b) Run command "type output.json"
