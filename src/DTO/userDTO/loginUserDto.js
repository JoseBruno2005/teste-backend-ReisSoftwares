export default function loginUserDto(data) {
  const { email, password } = data;

  if (!email || !password) {
    throw new Error("Email e senha são obrigatórios.");
  }

  return { email, password };
}