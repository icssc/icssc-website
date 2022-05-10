import { Button, Form } from "react-bootstrap";

function submitNewsletterForm() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzY3Q-9m_dVi0o0x4c2DoPnJa5_HjkhTlRXe16cQVuKJvWYIEI/exec'
  const form = document.forms['submit-to-google-sheet']
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        if (response.ok) {
          window.location.replace("newsletter-thank-you.html");
        }
        console.log('Success!', response)
      })
      .catch(error => console.error('Error!', error.message))
  })
}

export default function Newsletter() {
  return (
    <>
      <h1>Join Our Newsletter</h1>

      <main role="main">
        <section class="text-center u-content-space">
          <div class="container">
            <header class="text-center w-md-50 mx-auto mb-8">
              <p class="h5">Students can sign up to recieve latest events and updates about ICSSC!</p>
            </header>

            <div class="d-flex justify-content-around ">
              <Form>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="email@uci.edu" required />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control placeholder="Jane Doe" required />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Major</Form.Label>
                  <Form.Control placeholder="Computer Science" required />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Year</Form.Label>
                  <Form.Control placeholder="Senior" required />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}