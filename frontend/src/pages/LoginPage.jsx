import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login() {
//   const onRegister = (evt) => {
//     const formData = new FormData(evt.target.form);
//     try {
//       fetch("/api/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: formData,
//       });
//     } catch (error) {
//         console.error("Registration error:", error);
//     }
//   };

  return (
    <>
      <Form method="POST" action="/api/auth/login">
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>

        <div>
          <Button className="me-2" variant="primary" type="submit">
            Login
          </Button>

          <Button href="/register" variant="secondary">
          {/* <Button onClick={onRegister} variant="secondary"> */}
            Register
          </Button>
        </div>
      </Form>
    </>
  );
}
