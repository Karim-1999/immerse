export function CardButton() {

    const OpenChatBtn = document.querySelector('.supp-open-chat');
    const ContactCard = document.querySelector('.supp-chat-card');
    const close = document.querySelector('.close');
    const icons = document.getElementsByClassName('icon')

    ContactCard.classList.toggle("open-chat");
    // CloseChatBtn.classList.toggle("close");
}

export function ContactNav() {
    const ContactCard = document.querySelector('.supp-chat-card');
    function fn() {
        ContactCard.classList.toggle("open-chat");
        // CloseChatBtn.classList.toggle("close");
    };
    fn()
}
