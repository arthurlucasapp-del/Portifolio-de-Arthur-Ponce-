

const cliques = document.getElementById("darkmode");
let dmon = true;

cliques.addEventListener('click',() =>
{   
    transition();
    document.body.classList.toggle("dark");
    if(dmon == true){
      dmon = false;
      cliques.textContent = '☀️';
    }
    else{
      dmon = true
      cliques.textContent = '🌙';
    }

    trocarVideo();
});

function transition(){
  document.body.classList.toggle("move")
}

function trocarVideo() {
  const video = document.getElementById('bkvd');
  const fonte = document.getElementById('bkfonte');
  const seta = document.querySelector('.arw');

  if(dmon == true)
  { 
    fonte.src = 'bckgr.mp4'
    seta.src = "arwg.png"
      video.load();
      video.play();
  }
  else{
    fonte.src = 'vd2.mp4';
        seta.src = "arwp.png"
      video.load();
      video.play();
  }
  

}


const track = document.querySelector(".carousel-track");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let current = 0;

next.addEventListener("click", () => {
    if (current < 3) {
        current++;
        track.style.transform = `translateX(-${current * 100}%)`;
    }
});

prev.addEventListener("click", () => {
    if (current > 0) {
        current--;
        track.style.transform = `translateX(-${current * 100}%)`;
    }
});

function mascara_cep()
{ var cep_formatado = document.getElementById("cep").value
    if (cep_formatado[2]!=".")
    {
        if (cep_formatado[2]!=undefined)
        {
            document.getElementById("cep").value=cep_formatado.slice(0,2)+"."+cep_formatado[2];
        }
    }

    if (cep_formatado[6]!="-")
    {
        if(cep_formatado[6]!=undefined)
        {
            document.getElementById("cep").value=cep_formatado.slice(0,6)+"-"+cep_formatado[6]
        }
    }
}       

function mascara_cpf ()
{
    var cpf_formatado=document.getElementById("cpf").value

    if (cpf_formatado[3]!=".")
    {
        if(cpf_formatado[3]!=undefined)
        {
            document.getElementById("cpf").value=cpf_formatado.slice(0,3)+"."+cpf_formatado[2]
        }
    }
    
    if (cpf_formatado[7]!=".")
        {
            if(cpf_formatado[7]!=undefined)
            {
                document.getElementById("cpf").value=cpf_formatado.slice(0,7)+"."+cpf_formatado[7]
            }
        }
        if (cpf_formatado[11]!="-")
            {
                if(cpf_formatado[11]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,11)+"-"+cpf_formatado[11]
                }
            }

}

function mascara_telefone ()
{

    var tel = document.getElementById("telefone").value
    console.log(tel)
  tel=tel.slice(0,20) //(pode limitar a quantidade de char na entrada pelo java script)
    console.log(tel)
  document.getElementById("telefone").value=tel
tel=document.getElementById("telefone").value.slice(0,20)
    console.log(tel)
   
    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0]!="+")
    {
        if(tel_formatado[0]!=undefined)
        {
            document.getElementById("telefone").value="+"+tel_formatado[0];
        }
    }

    if (tel_formatado[3]!=" ")
    {
        if(tel_formatado[3]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,3)+" "+tel_formatado[3]
        }
    }

    if (tel_formatado[4]!="(")
        {
            if(tel_formatado[4]!=undefined)
            {
                document.getElementById("telefone").value=tel_formatado.slice(0,4)+"("+tel_formatado[4]
            }
        }

        if (tel_formatado[7]!=")")
            {
                if(tel_formatado[7]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,7)+")"+tel_formatado[7]
                }
            }
            if (tel_formatado[8]!=" ")
                {
                    if(tel_formatado[8]!=undefined)
                    {
                        document.getElementById("telefone").value=tel_formatado.slice(0,8)+" "+tel_formatado[8]
                    }
                }
                if (tel_formatado[10]!=" ")
                    {
                        if(tel_formatado[10]!=undefined)
                        {
                            document.getElementById("telefone").value=tel_formatado.slice(0,10)+" "+tel_formatado[10]
                        }
                    }
    
    if (tel_formatado[15]!="-")
    {
        if(tel_formatado[15]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,15)+"-"+tel_formatado[15]
        }
    }
}

function mascara_cnpj ()
{
    var cnpj_formatado=document.getElementById("cnpj").value

    if (cnpj_formatado[2]!=".")
    {
        if(cnpj_formatado[2]!=undefined)
        {
            document.getElementById("cnpj").value=cnpj_formatado.slice(0,2)+"."+cnpj_formatado[2]
        }
    }
    
    if (cnpj_formatado[6]!=".")
        {
            if(cnpj_formatado[6]!=undefined)
            {
                document.getElementById("cnpj").value=cnpj_formatado.slice(0,6)+"."+cnpj_formatado[6]
            }
        }
        if (cnpj_formatado[10]!="/")
            {
                if(cnpj_formatado[10]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_formatado.slice(0,10)+"/"+cnpj_formatado[10]
                }
            }
            if (cnpj_formatado[10]!="/")
                {
                    if(cnpj_formatado[10]!=undefined)
                    {
                        document.getElementById("cnpj").value=cnpj_formatado.slice(0,10)+"/"+cnpj_formatado[10]
                    }
                }
                if (cnpj_formatado[15]!="-")
                    {
                        if(cnpj_formatado[15]!=undefined)
                        {
                            document.getElementById("cnpj").value=cnpj_formatado.slice(0,15)+"-"+cnpj_formatado[15]
                        }
                    }

}

const dialog = document.querySelector('#formenviado');
const linkAbrir = document.querySelector('.sendform');
const btnFechar = document.querySelector('#closemessage');

linkAbrir.addEventListener('click', (event) => {
  event.preventDefault(); 
  dialog.showModal();
});

btnFechar.addEventListener('click', () => {
  dialog.close();
});

const assinatura = document.querySelector('#d01');

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    assinatura.style.transform = `translateY(${scroll * 0.3}px)`;
});

const seta = document.querySelector('.arw');

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const rotacao = Math.max(-360, -scroll / 3);

    seta.style.transform = `rotate(${rotacao}deg)`;
});

const galleryTrack = document.querySelector(".gallery-track");
const gallerySlides = document.querySelectorAll(".gallery-slide");
const galleryPrev = document.querySelector(".gallery-arrow.prev");
const galleryNext = document.querySelector(".gallery-arrow.next");
const galleryDots = document.querySelector(".gallery-dots");

let galleryIndex = 0;

gallerySlides.forEach((_, index) => {
    const dot = document.createElement("button");

    dot.setAttribute("aria-label", `Imagem ${index + 1}`);

    dot.addEventListener("click", () => {
        galleryIndex = index;
        updateGallery();
    });

    galleryDots.appendChild(dot);
});

const galleryDotButtons = galleryDots.querySelectorAll("button");

function updateGallery() {
    galleryTrack.style.transform =
        `translateX(-${galleryIndex * 100}%)`;

    galleryDotButtons.forEach((dot, index) => {
        dot.classList.toggle("active", index === galleryIndex);
    });
}

galleryNext.addEventListener("click", () => {
    galleryIndex = (galleryIndex + 1) % gallerySlides.length;
    updateGallery();
});

galleryPrev.addEventListener("click", () => {
    galleryIndex =
        (galleryIndex - 1 + gallerySlides.length) % gallerySlides.length;
    updateGallery();
});

setInterval(() => {
    galleryIndex = (galleryIndex + 1) % gallerySlides.length;
    updateGallery();
}, 4000);

