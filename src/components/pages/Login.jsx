import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const FormularioLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const validarEmail = (value) => {
    return value.includes("@") || "El email debe contener un '@'";
  };

  const validarPassword = (value) => {
    return (
      /^(?=.*[A-Z])(?=.*\d).+$/.test(value) ||
      "La contraseña debe contener al menos una mayúscula y un número"
    );
  };

  return (
    <section className="container mainSection">
      <div className="card">
        <div className="card-title bg-body-tertiary">
          <h1 className="mx-3 my-2">Login</h1>
        </div>
        <div className="card-body">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3 container">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                className="form-control bg-body-tertiary"
                placeholder="admin@rollingcode.com"
                {...register("email", {
                  required: "El email es un campo obligatorio",
                  validate: validarEmail,
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 container">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                className="form-control bg-body-tertiary"
                placeholder="Escribe tu contraseña"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 8,
                    message:
                      "La contraseña debe tener como mínimo 8 caracteres",
                  },
                  maxLength: {
                    value: 15,
                    message:
                      "La contraseña debe tener como máximo 15 caracteres",
                  },
                  validate: validarPassword,
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <div className="container">
              <Button type="submit" variant="primary" className="mb-4">
                Iniciar Sesión
              </Button>
            </div>
            <Form.Group className="mb-3 container">
              <Link to="/error">Olvidaste tu contraseña?</Link>
            </Form.Group>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default FormularioLogin;
