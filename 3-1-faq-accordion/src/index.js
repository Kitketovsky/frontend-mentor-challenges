const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const isDataClosed = question.getAttribute("data-closed");
    const answer = question.nextElementSibling;

    if (isDataClosed === "true") {
      questions.forEach((questionNode) => {
        questionNode.setAttribute("data-closed", "true");
        questionNode.nextElementSibling.style.maxHeight = '0px';
      });

      question.setAttribute("data-closed", "false");
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      question.setAttribute("data-closed", "true");
      answer.style.maxHeight = "0px";
    }
  });
});
