# Named-Entity-Highlighter

## Description
Named Entity Highlighter is a chrome extension that can read the page you are on and highlight the named entities on that page. It uses FastApi, Python, and a Uvicorn server on the backend. The front end of this extension uses JavaScript.

![Screen Shot 2023-01-02 at 12 50 45 PM](https://user-images.githubusercontent.com/67932419/210265210-a0fdecfd-caa4-494d-a3f4-1b40abedca03.png)

## Getting started

1. Clone the repository onto your local machine.
2. Ensure the requirements for the backend are installed onto your machine. These requirements can be found in the requirements.txt file in the backend folder. For more info visit https://fastapi.tiangolo.com/.
3. Go to chrome://extensions and turn on developer mode. Load the front-end portion of the project using the load unpacked option in the top left.
4. Run your backend server and navigate to a web page that you want to highlight. Click on the icon for the extension, and you will see the named entities highlighted.

