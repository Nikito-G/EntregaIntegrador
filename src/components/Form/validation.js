export default function validation(input) {
	const error = {};
	const regexEmail = /\S+@\S+\.\S+/;
	const regexPassword = new RegExp("[0-9]");
	// El nombre de usuario tiene que ser un email
	if (!regexEmail.test(input.email)) {
		error.email = "Debe ingresar un email válido!";
	}
	// El nombre de usuario no puede estar vacío
	if (!input.email) {
		error.email = "Debe ingresar un nombre!";
	}
	// El nombre de usuario no puede tener más de 35 caracteres
	if (input.email > 35) {
		error.email = "Debe ser menor a 35 caracteres!";
	}
	// La contraseña tiene que tener al menos un número
	if (!regexPassword.test(input.password)) {
		error.password = "Al menos un número!";
	}
	// La contraseña tiene que tener una longitud entre 6 y 10 caracteres
	if (input.password.length < 6 || input.password.length > 10) {
			error.password = "Contraseña entre 6 y 10 caracteres!";
	}
	return error;
}