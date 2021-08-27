import { JSDOM } from "jsdom"
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window


let div = document.createElement('div');

document.body.innerHTML =
global.document.innerHTML = `
    <section class="body">
        <div id="todos">
            <h3>Today's To Dos</h3>
            <form>
                <input type="text" placeholder="Add to your list" id="input" required>
                <button id="todoBtn">Add</button>
            </form>
            
        </div>
    </section>
`;

