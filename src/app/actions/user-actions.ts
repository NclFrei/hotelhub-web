"use server"

interface UserData {
  name: string
  email: string
  senha: string
  cpf: string
  nomeHotel: string
  cargo: string
}

export async function registerUser(userData: UserData) {
  try {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      return {
        success: false,
        message: errorData?.message || `Erro ao cadastrar: ${response.status} ${response.statusText}`,
      }
    }

    const data = await response.json()
    return {
      success: true,
      data,
      message: "Usuário cadastrado com sucesso!",
    }
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "Ocorreu um erro ao cadastrar o usuário",
    }
  }
}

