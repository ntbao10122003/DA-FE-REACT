export const container = document.querySelector(".container");
export const signUpBtn = document.querySelector(".blue-bgr button");

signUpBtn.addEventListener("click",
() => {
    container.classList.toggle("change");
}
);