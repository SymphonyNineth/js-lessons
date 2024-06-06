function createUser(name, age, profession) {
  const user = {
    name,
    age,
    profession,
  };
  return user;
}

function changeUserName(user, newName) {
  user.name = newName;
  return user;
}

function deleteUser(user) {
  delete user;
  return true;
}

function deleteActivityDB(activityDB) {
  delete activityDB;
  console.log("Deleted ActivityDB");
  return true;
}

function deleteAdmin(admin) {
  deleteActivityDB(admin.activityDB);
  delete admin;
  return true;
}

function createAdmin(name, age, role, activityDB) {
  const admin = { admin, name, age, role, activityDB };
}

function createSuperAdmin(name, age) {
  const superAdmin = { superAdmin, name, age };
}
