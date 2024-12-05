function handleSubmission() {
    const name = document.getElementById("name-input").value.trim();
    if (name) {
        // "Enter your name"과 버튼 숨기기
        document.querySelector(".letter div").style.display = "none"; // "You've got mail"도 숨기기
        document.getElementById("name-input").style.display = "none"; // 입력 필드 숨기기
        document.getElementById("submit-button").style.display = "none"; // 버튼 숨기기
        
        var letter = document.querySelector('.letter');
        letter.style.top = '50%';
        letter.style.left = '50%';
        letter.style.transform = 'translate(-50%, -50%)';
        letter.style.transition = "2s ease";
        letter.style.margin = "15px";
        document.querySelector(".letter div").style.height = "640px";
        document.querySelector(".letter div").style.width = "840px";

        document.querySelector(".lid.one").style.transition = "opacity 0.5s ease"; // 불투명도 변화에 애니메이션 추가
        document.querySelector(".lid.one").style.opacity = "0"; // 불투명도를 0으로 설정하여 사라지게 함
        document.querySelector(".lid.two").style.transition = "opacity 0.5s ease"; // 불투명도 변화에 애니메이션 추가
        document.querySelector(".lid.two").style.opacity = "0"; // 불투명도를 0으로 설정하여 사라지게 함
        document.querySelector(".envelope").style.transition = "opacity 0.5s ease"; // 불투명도 변화에 애니메이션 추가
        document.querySelector(".envelope").style.opacity = "0"; // 불투명도를 0으로 설정하여 사라지게 함
        document.querySelector(".wrapper").style.transition = "opacity 0.5s ease"; // 불투명도 변화에 애니메이션 추가
        document.querySelector(".wrapper").style.backgroundColor = "rgba(255, 0, 0, 0)"; // 불투명도를 0으로 설정하여 사라지게 함
    
        // 텍스트 길이에 맞춰 종이의 높이 변경
        const message = `Hello, ${name}!\n
        This is a letter for you.

        I was going to die, if not sooner then later, whether or not I had ever spoken myself. My silences had not protected me. Your silence will not protect you. In the transformation of silence into language and action, it is vitally necessary for each one of us to establish or examine her function in that transformation and to recognize her role as vital within that transformation. 
        What are the words you do not yet have? What do you need to say? What are the tyrannies you swallow day by day and at, tempt to make your own, until you will sicken and die of them, still in silence? Perhaps for some of you here today, I am the face of one of your fears.\n
        Because I am woman, because I am Black, because I am lesbian, because I am myself.\n
        -Audre lorde-\n
        The concept of minorities is relative. Even within the same gender, there is not necessarily equality. For example, there is a hierarchy between a white man and a black man. Similarly, there is a hierarchy between a black man and a black woman. 
        \n In other words, being a minority is not just about gender. Every society inevitably has majorities and minorities. However, being a minority should not mean staying as just "the few." \nThe difference between the majority and the minority is only a difference in numbers; it should not be a matter of structural inequality.
        But because human societies follow the principle of majority rule, we must be cautious of whether structural equality is tilted. Depending on which group we belong to, we may or may not be a minority. 
        \nUltimately, we are all minorities in some way.\n
        The silence of minorities, such as sexual minorities, women, and people with disabilities, undermines the diversity of society. A society without diversity cannot progress.
        \nIn various fields, including the arts, science, and medicine, women have historically been silenced and denied a voice. 
        Their contributions and potential were often ignored or excluded, resulting in many women's stories going untold. 
        \nHowever, it is now time to unravel the silenced past and begin articulating the history of those who were oppressed within it.

        \n Darling. Do not hesitate to speak out. Your silence will not protect you. This is the time to tell you story. We are woman. We are human.`;
        
        const textLength = message.length;
        document.querySelector(".letter").style.height = `700px`;
        document.querySelector(".letter").style.width = `900px`;

        setTimeout(() => {
            // 텍스트 타이핑 효과 시작
            typeWriterEffect(message);
        }, 2000);
    }
}

document.getElementById("submit-button").addEventListener("click", handleSubmission);

// Enter 키 입력 이벤트 추가
document.getElementById("name-input").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        handleSubmission();
    }
});

function typeWriterEffect(message) {
    let i = 0;
    const element = document.querySelector(".letter div");
    element.innerHTML = ""; // 기존 텍스트 비우기
    element.style.display = "block"; // 메시지가 표시되도록 설정

    function type() {
        if (i < message.length) {
            element.innerHTML += (message.charAt(i) === '\n') ? "<br>" : message.charAt(i);
            i++;
            setTimeout(type, 0); // 타이핑 속도
        }         
    }
    type();
}
