export function login(email: string, password: string) {
  if (email.trim() == "" || password.trim() == "") return false;
  console.info({
    email: email,
    password: password,
  });
}
