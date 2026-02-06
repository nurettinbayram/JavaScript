/*
--------------------------APIs--------------------------------
-https://github.com/public-apis/public-apis?tab=readme-ov-file
-https://api.opencagedata.com/geocode/v1/json?q=52.5432379%2C+13.4142133&key=37459084aa374f0b9840f4312e4e4cde --> Key:37459084aa374f0b9840f4312e4e4cde --> (Yagmuryureklim)
-Example Request: https://v6.exchangerate-api.com/v6/9f257b414ae0de0e68d2e4d4/latest/USD --> API Key: 9f257b414ae0de0e68d2e4d4 -->(Axin)
-https://jsonplaceholder.typicode.com/ ---> ucretsiz API
*/

const inputBox = document.getElementById("inputBox");

const profile = new Profile();
const ui = new UI();

inputBox.addEventListener("keyup", function (event) {
  const text = event.target.value;

  if (text !== "") {
    profile
      .getProfile(text) //buraya gelen promis objesi o yuzden then ile yakalamamiz gerekiyor
      .then((res) => {
        data = res.profileData;
        taskData = res.taskData;
        console.log(data.length);

        if (data.length === 0) {
          ui.profile.classList = "no-visibil profile";
          ui.alertBox.classList = "";
          ui.taskContainer.classList = "resultBoxContainer no-visibil";
        } else {
          ui.profile.classList = "profile";
          ui.alertBox.classList = "no-visibil";
          ui.taskContainer.classList = "resultBoxContainer";
          ui.showProfile(data[0]);

          ui.unCompletedUl.innerHTML = "";
          ui.completedUl.innerHTML = "";

          ui.showTodoList(taskData);
        }
      })
      .catch((err) => {});
  } else {
    ui.alertBox.classList = "no-visibil";
  }
});
