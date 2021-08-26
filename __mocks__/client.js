import { JSDOM } from "jsdom"
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window

global.document.innerHTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
</head>

<body>
    <section class="body">
        <div id="todos">
            <h3>Today's To Dos</h3>
            <form>
                <input type="text" placeholder="Add to your list" id="input" required>
                <button id="todoBtn">Add</button>
            </form>
            
        </div>
    </section>
</body>

</html>`;