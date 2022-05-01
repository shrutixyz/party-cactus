import os
from twilio.rest import Client
from sendgrid import SendGridAPIClient
from twilio.rest import Client
from sendgrid.helpers.mail import Mail


def send(email):
    message = Mail(
        from_email='aakashferrari@gmail.com',
        to_emails=email,
        subject='not your type - invite',
        html_content=f'play this amazing party cactus game at www.partycactus.com')
    sg = SendGridAPIClient('')
    response = sg.send(message)
    print(response.status_code, response.body, response.headers)

    # print("hello")


