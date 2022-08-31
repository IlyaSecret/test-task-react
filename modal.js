function CreateModal() {
    const modal = document.createElement("div")
    modal.classList.add('modal-window')
    modal.insertAdjacentHTML('beforeend', `
            <div class="modal-window__overlay" id="modal">
                <div class="modal-window__body">
                    <div class="modal-window__title">
                        <h1>Заявка на участие</h2>
                    </div>
                    <form id="form" class="text">
                        <input type="text" name="user-name" id="user-name" placeholder="ФИО" />
                        <input type="email" name="user-email" id="user-email" placeholder="E-mail" />
                        <button type="submit" id="send-button">Отправить</button>
                        <p class="send-status"></p>
                    </form>
                </div>
            </div>
        `)
        document.body.appendChild(modal)
        return modal
}

$.modal = function(options) {
    const $modal = CreateModal()
    return {
        open() {
            $modal.classList.add("open")
        },
        close() {
            $modal.classList.remove("open")
        }
    }
}