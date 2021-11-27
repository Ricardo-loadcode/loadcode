const avancar = () => {
    const img01 = document.getElementById('slide1');
    const img02 = document.getElementById('slide2');
    const img03 = document.getElementById('slide3');

    if (img01.checked) {
        img02.checked = true;
        active('dot2');
        document.getElementById('text01').style.display = 'none';
        document.getElementById('text02').style.display = 'block';
        document.getElementById('text03').style.display = 'none';
        return;
    }
    if (img02.checked) {
        img03.checked = true;
        active('dot3');
        document.getElementById('text01').style.display = 'none';
        document.getElementById('text02').style.display = 'none';
        document.getElementById('text03').style.display = 'block';
        return;
    }
    if (img03.checked) {
        img01.checked = true;
        active('dot1');
        document.getElementById('text01').style.display = 'block';
        document.getElementById('text02').style.display = 'none';
        document.getElementById('text03').style.display = 'none';
        return;
    }
}

const voltar = () => {
    const img01 = document.getElementById('slide1');
    const img02 = document.getElementById('slide2');
    const img03 = document.getElementById('slide3');

    if (img03.checked) {
        img02.checked = true;
        active('dot2');
        document.getElementById('text01').style.display = 'none';
        document.getElementById('text02').style.display = 'block';
        document.getElementById('text03').style.display = 'none';
        return;
    }
    if (img02.checked) {
        img01.checked = true;
        active('dot1');
        document.getElementById('text01').style.display = 'block';
        document.getElementById('text02').style.display = 'none';
        document.getElementById('text03').style.display = 'none';
        return;
    }
    if (img01.checked) {
        img03.checked = true;
        active('dot3');
        document.getElementById('text01').style.display = 'none';
        document.getElementById('text02').style.display = 'none';
        document.getElementById('text03').style.display = 'block';
        return;
    }
}

const active = (dot) => {

    if (dot === 'dot1') {
        document.getElementById('dot1').style.backgroundColor = '#0cdaef';
        document.getElementById('dot2').style.backgroundColor = '#c0a0ff';
        document.getElementById('dot3').style.backgroundColor = '#c0a0ff';
    }

    if (dot === 'dot2') {
        document.getElementById('dot1').style.backgroundColor = '#c0a0ff';
        document.getElementById('dot2').style.backgroundColor = '#0cdaef';
        document.getElementById('dot3').style.backgroundColor = '#c0a0ff';
    }

    if (dot === 'dot3') {
        document.getElementById('dot1').style.backgroundColor = '#c0a0ff';
        document.getElementById('dot2').style.backgroundColor = '#c0a0ff';
        document.getElementById('dot3').style.backgroundColor = '#0cdaef';
    }
}
