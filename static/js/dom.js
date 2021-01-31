// It uses data_handler.js to visualize elements
import { dataHandler } from "./data_handler.js";

export let dom = {
    init: function () {
        // This function should run once, when the page is loaded.
    },
    loadBoards: function () {
        // retrieves boards and makes showBoards called
        dataHandler.getBoards(function(boards){
            dom.showBoards(boards);
        });
    },
    showBoards: function (boards) {
        // shows boards appending them to #boards div
        // it adds necessary event listeners also

        let boardList = '';

        for(let board of boards){
            boardList += `
                <li>${board.title}</li>
            `;
        }

        const outerHtml = `
            <ul class="board-container">
                ${boardList}
            </ul>
        `;

        let boardsContainer = document.querySelector('#boards');
        boardsContainer.insertAdjacentHTML("beforeend", outerHtml);
    },
    loadCards: function (boardId) {
        // retrieves cards and makes showCards called
    },
    showCards: function (cards) {
        // shows the cards of a board
        // it adds necessary event listeners also
    },
    // here comes more features

    accordion: function () {
        document.querySelectorAll('.board-toggle').forEach(button => {
            button.addEventListener('click', () => {
                let boardsColumns = button.nextElementSibling;

                button.classList.toggle('board-toggle--active');

                if (button.classList.contains('board-toggle--active')) {
                    boardsColumns.style.maxHeight = boardsColumns.scrollHeight + 'px';
                } else {
                    boardsColumns.style.maxHeight = 0;
                }
            });
        });
    }

};
