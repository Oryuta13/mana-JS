const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {
    // 選択した色を背景色に反映する
    document.body.style.backgroundColor = color.value;

    if (color.value === '#ffffff') {
        text.textContent = `カラーコード: ${color.value} (white)`;
    } else if(color.value === '#000000') {
        text.textContent = `カラーコード: ${color.value} (black)`;
    } else {
        // カラーコードを表示する
        text.textContent = `カラーコード: ${color.value}`;
    }

};


color.addEventListener('input', colorBg)

