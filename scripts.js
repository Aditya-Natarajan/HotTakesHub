$(document).ready(function () {
  const $loginForm = $('#loginForm');
  const $usernameField = $('#floatingInput');
  const $passwordField = $('#floatingPassword');
  const $usernameError = $('#usernameError');
  const $passwordError = $('#passwordError');

  $loginForm.on('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Clear previous error messages
    $usernameError.text('');
    $passwordError.text('');

    // Form validation
    const username = $usernameField.val().trim();
    const password = $passwordField.val().trim();

    let isValid = true;

    if (!username) {
      $usernameError.text('Please enter your username.');
      isValid = false;
    }

    if (!password) {
      $passwordError.text('Please enter your password.');
      isValid = false;
    }

    if (isValid) {
      $usernameField.val('');
      $passwordField.val('');
      window.location.href = "welcome.html";
    }
  });

  $('#btnadmin').on('click', function () {
    // Clear previous error messages
    $usernameError.text('');
    $passwordError.text('');

    // Validate form before redirecting
    const username = $usernameField.val().trim();
    const password = $passwordField.val().trim();

    let isValid = true;

    if (!username) {
      $usernameError.text('Please enter your username.');
      isValid = false;
    }

    if (!password) {
      $passwordError.text('Please enter your password.');
      isValid = false;
    }

    if (isValid) {
      $usernameField.val('');
      $passwordField.val('');
      window.location.href = "Admin.html";
    }
  });
  //adduser validation
  const $addUserForm = $('#addUserForm');
  const $userIdField = $('#userId');
  const $newUsernameField = $('#username');
  const $newPasswordField = $('#password');
  const $userIdError = $('#userIdError');
  const $newUsernameError = $('#userNameError');
  const $newPasswordError = $('#passWordError');
  const $alert = $('#autoAlert');

  if ($addUserForm.length) {
    $addUserForm.on('submit', function (event) {
      event.preventDefault();

      // Clear previous error messages
      $userIdError.text('');
      $newUsernameError.text('');
      $newPasswordError.text('');

      // Form validation
      const userId = $userIdField.val().trim();
      const newUsername = $newUsernameField.val().trim();
      const newPassword = $newPasswordField.val().trim();

      let isValid = true;

      if (!userId) {
        $userIdError.text('Please enter the User ID.');
        isValid = false;
      }

      if (!newUsername) {
        $newUsernameError.text('Please enter the username.');
        isValid = false;
      }

      if (!newPassword) {
        $newPasswordError.text('Please enter the password.');
        isValid = false;
      }

      if (isValid) {
        $userIdField.val('');
        $newUsernameField.val('');
        $newPasswordField.val('');
        $alert.fadeIn();
        setTimeout(function () {
          $alert.fadeOut();
        }, 3000);
        // Here you can also add the code to submit the form data to the server if needed
      }
    });
  }
  //validation of remove user
  // Validation of remove user
const $removeUserForm = $('#removeuser');
const $removeUserId = $('#remuserId');
const $removeUserError = $('#removeusererror');

if ($removeUserForm.length) {
  $removeUserForm.on('submit', function(event) {
    event.preventDefault();
    // Clear previous error messages
    $removeUserError.text('');
    // Form validation
    const removeUserId = $removeUserId.val().trim();
    let isValid = true;
    if (!removeUserId) {
      $removeUserError.text('Please enter the User ID.');
      isValid = false;
    }
    if (isValid) {
      $removeUserId.val('');
      $alert.fadeIn();
      setTimeout(function() {
        $alert.fadeOut();
      }, 3000);
      // Here you can also add the code to submit the form data to the server if needed
    }
  });
}

});
// buttons of admin page
function adduser() {
  window.location.href = "addUser.html";

}
function removeuser() {
  window.location.href = "Removeaccess.html";
}



