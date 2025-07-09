function allowDrop(ev) {
    ev.preventDefault();
}

document.querySelectorAll('.term').forEach(term => {
    term.addEventListener('dragstart', ev => {
        ev.dataTransfer.setData('text', ev.target.id);
    });
});

function drop(ev) {
    ev.preventDefault();
    const termId = ev.dataTransfer.getData('text');
    const droppedTerm = document.getElementById(termId);
    const correctTerm = ev.target.getAttribute('data-term');

    if (termId === correctTerm) {
        ev.target.textContent = droppedTerm.textContent + " ✅";
        ev.target.classList.add('matched');
        droppedTerm.remove();
    } else {
        alert("❌ Incorrect match. Try again!");
    }
}
