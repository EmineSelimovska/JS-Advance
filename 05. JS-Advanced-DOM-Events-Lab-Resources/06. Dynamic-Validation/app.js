function validate() {
    let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
    const input = document.getElementById('email');
    let value = input.value;

    input.addEventListener('change', onChange);

    function onChange(event) {
        if(reg.test(event.target.value)){
            event.target.removeAttribute('class');
            return;
        }

        event.target.className = 'error';


        
    }
}