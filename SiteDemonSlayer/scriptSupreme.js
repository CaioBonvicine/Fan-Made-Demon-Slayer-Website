document.addEventListener("DOMContentLoaded", () => {

  const translations = {
    pt: {
      homeTitle: "Demon Slayer - Demônios Superiores",
      searchPlaceholder: "Digite o nome do Oni (ex: Akaza, Muzan...)",
      searchBtn: "Buscar",
      chooseText: "Ou escolha diretamente:",
      backButton: "Voltar para Home",
      footerText: "Este site é apenas um site feito por fã, informações podem não ser precisas",

    
      strength: "Força",
      speed: "Velocidade",
      durability: "Durabilidade",
      stamina: "Stamina",
      iq: "QI",

  
      "Muzan-h2": "Muzan Kibutsuji",
      "Muzan-p": "Muzan Kibutsuji é o primeiro e mais poderoso Oni existente. Criado durante a era Heian, ele espalhou sua maldição e transformou inúmeros humanos em demônios para servir aos seus propósitos. Frio, calculista e imortal, Muzan busca incessantemente superar seus limites e eliminar todos que se opõem ao seu domínio.",

      "Kokushibu-h2": "Kokushibu - Lua Superior 1",
      "Kokushibu-p1": "Kokushibu, anteriormente conhecido como Michikatsu Tsugikuni, é um dos antagonistas principais da série Demon Slayer: Kimetsu no Yaiba. Ele é o irmão gêmeo mais velho de Yoriichi Tsugikuni, o criador da Respiração do Sol e considerado o caçador de demônios mais poderoso da história...",
      "Kokushibu-p2": "Durante sua vida humana, Michikatsu era um samurai habilidoso que, consumido pela inveja e desejo de superar seu irmão, buscou a imortalidade ao se aliar a Muzan Kibutsuji. Ao se tornar um demônio, ele preservou suas habilidades de espadachim e desenvolveu a Respiração da Lua, uma técnica derivada da Respiração do Sol. Como membro dos Doze Kizuki, ocupou a posição de Lua Superior 1, tornando-se o mais forte entre os servos de Muzan.",
      "Kokushibu-p3": "Kokushibu é também o ancestral de Muichiro Tokito e Yuichiro Tokito, os Hashiras da Névoa. Sua história é marcada por tragédia, orgulho e uma busca incessante por poder, refletindo os temas centrais da série.",

      "Gyutaro-h2": "Gyutaro - Lua Superior 6",
      "Gyutaro-p1": "Gyutaro é um dos principais antagonistas do Arco do Distrito do Entretenimento em Demon Slayer: Kimetsu no Yaiba. Ele compartilha a posição de Lua Superior Seis com sua irmã Daki, formando uma dupla mortal que aterroriza o Distrito de Yoshiwara.",
      "Gyutaro-p2": "Nascido em extrema pobreza e negligência, Gyutaro desenvolveu um profundo ressentimento em relação aos outros devido à sua aparência e sofrimento. Após ser transformado em demônio por Doma, ele se tornou um dos mais perigosos membros dos Doze Kizuki, graças à sua velocidade, regeneração e habilidades envenenadas únicas. ",
      "Gyutaro-p3": "Gyutaro luta utilizando foices de sangue, combinando ataques físicos brutais com manipulação de sangue venenoso, o que o torna um adversário letal mesmo para Caçadores de Demônios de alto nível. ",

      "Gyokko-h2": "Gyokko - Lua Superior 5",
      "Gyokko-p": "Gyokko é um dos antagonistas principais do arco da Vila dos Ferreiros em Demon Slayer: Kimetsu no Yaiba. Ele ocupa a posição de Lua Superior Cinco (Upper Rank Five) entre os Doze Kizuki, servindo diretamente a Muzan Kibutsuji. Sua habilidade única permite criar e manipular objetos de cerâmica vivos, tornando-o extremamente imprevisível e perigoso. Manipulador e cruel, Gyokko aterroriza seus inimigos enquanto busca eliminar qualquer ameaça ao seu poder.",

      "Hantengu-h2": "Hantengu - Lua Superior 4",
      "Hantengu-p": " Hantengu é um dos antagonistas principais do arco da Vila dos Ferreiros em Demon Slayer: Kimetsu no Yaiba. Ele ocupa a posição de Lua Superior Quatro (Upper Rank Four) entre os Doze Kizuki, servindo diretamente a Muzan Kibutsuji. Sua habilidade única permite dividir-se em múltiplos clones, cada um representando um aspecto diferente de sua personalidade, tornando-o extremamente imprevisível e perigoso. Manipulador e cruel, Hantengu aterroriza seus inimigos enquanto busca eliminar qualquer ameaça ao seu poder.",

      "Akaza-h2": "Akaza - Lua Superior 3",
      "Akaza-p": "Akaza é um dos Doze Luas Superiores, ocupando a posição de Lua Superior Três.  Extremamente habilidoso em combate corpo a corpo, ele utiliza técnicas de artes marciais  demoníacas combinadas com uma força e velocidade sobre-humanas. Akaza busca incessantemente  adversários fortes, valorizando a batalha acima de tudo, e despreza aqueles que considera fracos.",

      "Douma-h2": "Douma - Lua Superior 2",
      "Douma-p": "Douma (童磨) é um dos antagonistas mais perigosos de Demon Slayer. Originalmente humano, foi transformado em demônio por Muzan Kibutsuji e tornou-se o Lua Superior 2. Líder do culto Eternal Paradise Faith, Douma atrai seguidores para seu próprio prazer macabro. Frio, insensível e psicopata, ele vê os humanos como alimento e se alimenta de suas emoções, especialmente da tristeza e desespero. Possui habilidades sobrenaturais, incluindo regeneração avançada, controle de gelo e ataques letais com leques de ferro. Douma foi finalmente derrotado por uma aliança de caçadores, utilizando veneno de flor de wisteria para superar sua regeneração."
    },

    en: {
      homeTitle: "Demon Slayer - Upper Moons",
      searchPlaceholder: "Type the Oni's name (e.g. Akaza, Muzan...)",
      searchBtn: "Search",
      chooseText: "Or choose directly:",
      backButton: "Go Back to Home",
      footerText: "This is a fan-made site, information may not be accurate",

    
      strength: "Strength",
      speed: "Speed",
      durability: "Durability",
      iq: "IQ",

  
      "Muzan-h2": "Muzan Kibutsuji",
      "Muzan-p": "Muzan Kibutsuji is the first and most powerful demon in existence. Born during the Heian era, he spread his curse and turned countless humans into demons to serve his purposes. Cold, calculating, and immortal, Muzan constantly seeks to surpass his limits and eliminate anyone who opposes his rule.",

      "Kokushibu-h2": "Kokushibu - Upper Moon 1",
      "Kokushibu-p1": "Kokushibu, formerly known as Michikatsu Tsugikuni, is one of the main antagonists of Demon Slayer: Kimetsu no Yaiba...",
      "Kokushibu-p2": "As a human, Michikatsu was a skilled samurai who...",
      "Kokushibu-p3": "Kokushibu is also the ancestor of Muichiro Tokito and Yuichiro Tokito...",

      "Gyutaro-h2": "Gyutaro - Upper Moon 6",
      "Gyutaro-p1": "Gyutaro is one of the main antagonists of the Entertainment District Arc...",
      "Gyutaro-p2": "Born into extreme poverty and neglect, Gyutaro developed...",
      "Gyutaro-p3": "Gyutaro fights using blood sickles...",

      "Gyokko-h2": "Gyokko - Upper Moon 5",
      "Gyokko-p": "Gyokko is one of the main antagonists of the Swordsmith Village Arc...",

      "Hantengu-h2": "Hantengu - Upper Moon 4",
      "Hantengu-p": "Hantengu is one of the main antagonists of the Swordsmith Village Arc...",

      "Akaza-h2": "Akaza - Upper Moon 3",
      "Akaza-p": "Akaza is one of the Twelve Upper Moons, holding the position of Upper Moon Three...",

      "Douma-h2": "Douma - Upper Moon 2",
      "Douma-p": "Douma is one of the most dangerous antagonists in Demon Slayer..."
    }
  };


  function setLanguage(lang) {
    localStorage.setItem("siteLang", lang);

  
    const toggleBtn = document.getElementById("langToggle");
    if (toggleBtn) toggleBtn.textContent = lang === "pt" ? "EN 🇺🇸" : "PT 🇧🇷";


    const homeTitle = document.querySelector(".main-title");
    if (homeTitle) homeTitle.textContent = translations[lang].homeTitle;

    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.placeholder = translations[lang].searchPlaceholder;

    const searchBtn = document.getElementById("searchBtn");
    if (searchBtn) searchBtn.textContent = translations[lang].searchBtn;

    const chooseText = document.querySelector(".oni-list h2");
    if (chooseText) chooseText.textContent = translations[lang].chooseText;

    const backButton = document.querySelector(".back-button");
    if (backButton) backButton.textContent = translations[lang].backButton;

    const footer = document.querySelector("footer p");
    if (footer) footer.textContent = translations[lang].footerText;

  
    document.querySelectorAll("[data-template]").forEach(el => {
      const key = el.getAttribute("data-template");
      if (translations[lang][key]) el.textContent = translations[lang][key];
    });

  
    document.querySelectorAll(".stat").forEach(statEl => {
      const span = statEl.querySelector("span");
      const key = span.getAttribute("data-label") || span.textContent.trim().toLowerCase();
      if (key && translations[lang][key]) {
        span.textContent = translations[lang][key];
      }
    });


    const characterName = document.querySelector("h1")?.textContent?.trim() || document.querySelector("h2")?.textContent?.trim();
    const characterStats = {
      "Muzan Kibutsuji": { Força: 100, Velocidade: 100, Durabilidade: 100, Stamina: 100, QI: 100 },
      "Akaza": { Força: 94, Velocidade: 85, Durabilidade: 87, Stamina: 92, QI: 93 },
      "Kokushibu": { Força: 91, Velocidade: 92, Durabilidade: 89, Stamina: 93, QI: 96 },
      "Douma": { Força: 90, Velocidade: 89, Durabilidade: 88, Stamina: 89, QI: 82 },
      "Hantengu": { Força: 84, Velocidade: 80, Durabilidade: 82, Stamina: 85, QI: 78 },
      "Gyokko": { Força: 73, Velocidade: 77, Durabilidade: 75, Stamina: 68, QI: 57 },
      "Gyutaro": { Força: 67, Velocidade: 73, Durabilidade: 68, Stamina: 79, QI: 53 }
    };

    if (characterName && characterStats[characterName]) {
      const stats = characterStats[characterName];

      document.querySelectorAll(".stat").forEach(statEl => {
        const span = statEl.querySelector("span");
        const fill = statEl.querySelector(".fill");
        const percentageText = statEl.querySelector(".percentage");
        const key = span.getAttribute("data-label") || span.textContent.trim().toLowerCase();
        const target = stats[translations.pt[key]] ?? stats[key] ?? 0;

        fill.style.width = "0%";
        let current = 0;

        const step = () => {
          if (current < target) {
            current++;
            fill.style.width = current + "%";
            percentageText.textContent = current + "%";
            requestAnimationFrame(step);
          } else {
            fill.style.width = target + "%";
            percentageText.style.display = "block";
            percentageText.textContent = target + "%";
          }
        };
        requestAnimationFrame(step);
      });
    }
  }


  let currentLang = localStorage.getItem("siteLang") || "pt";
  setLanguage(currentLang);

  const toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "pt" ? "en" : "pt";
      setLanguage(currentLang);
    });
  }

});
