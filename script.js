const to_do_input = document.querySelector('#todo');
const list = document.querySelector('#list');
const to_do_form = document.querySelector('#to_do_form');
const sc_feedback = document.querySelector('#sc_feedback');
const heading = document.querySelector('#heading');

to_do_form.addEventListener('submit', function(event) {
    event.preventDefault();
    let task = to_do_input.value;
    addTaskToDOM(task);
    removeValue(to_do_input);
    screenReaderFeedback(task);
});

function addTaskToDOM(task) {
  let newID = generateID();
  let taskItem = createElement('li', '', list, ['class', 'task']);
  let theCheckbox = createElement('input', null, taskItem, ['type', 'checkbox']);
  let label = createElement('label', task, taskItem, ['for', newID]);
  theCheckbox.setAttribute('id', newID);
  let deleteButton = createElement('button', 'Delete Task', taskItem, ['class', 'delete_task']);
}

function createElement(tagName, textNode, parent, attribute = null) {
    let node = document.createElement(tagName);
    if (textNode != null) {
        let customTextNode = document.createTextNode(textNode);
        node.appendChild(customTextNode);
    }
    if (attribute != null) {
        node.setAttribute(attribute[0], attribute[1]);
    }
    parent.appendChild(node);
    return node;
}


function removeValue(input) {
    input.value = '';
}

function screenReaderFeedback(task, feedback = 'added') {
    sc_feedback.textContent = `${task} ${feedback}.`;
}

function generateID() {
    let idPrefix = 'task_num_';
    let tasks = document.querySelectorAll('#list > li');
    if (tasks.length == 0) {
        return `${idPrefix}0`;
    }
    return idPrefix + tasks.length;
}