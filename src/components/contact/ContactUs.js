import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageContact from '../../image/contact.jpg';
import {
    Button,
    ContactHeading,
    DivBind,
    From,
    FromArea,
    FromContainer,
    FromContent,
    FromContentHeading,
    FromContentImage,
    FromContentText,
    FromWrapper,
    ImageWrapper,
    Input,
    // eslint-disable-next-line prettier/prettier
    Label, MessageArea
} from './contactStyle';

function ContactUs() {
    const notify = () => toast('send sucessfuly');
    const ErrorEmail = () => toast('Not SEND');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_uoymz3c', 'template_tpxb3bb', form.current, 'v1j6fyJvwVfbDXgTt')
            .then(
                () => {
                    notify();
                },
                () => {
                    ErrorEmail();
                }
            );
    };

    return (
        <FromContainer>
            <ContactHeading> Contact Us </ContactHeading>
            <FromArea>
                <FromContent>
                    <FromContentHeading>Lest talk About Evrything</FromContentHeading>
                    <FromContentText>
                        Please tell me about your projects. and feel free to order now.
                    </FromContentText>
                    <ImageWrapper>
                        <FromContentImage src={ImageContact} alt="Contactimage" />
                    </ImageWrapper>
                </FromContent>
                <FromWrapper>
                    <DivBind>
                        <From ref={form} onSubmit={sendEmail}>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                type="text"
                                name="user_name"
                                required
                                placeholder="Name"
                            />

                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="user_email"
                                required
                                placeholder="Email"
                            />

                            <Label htmlFor="subject">Subject</Label>
                            <Input
                                id="subject"
                                name="user_subject"
                                required
                                placeholder="Subject"
                            />
                            <Label htmlFor="message">Message</Label>
                            <MessageArea
                                id="message"
                                name="message"
                                required
                                placeholder="Message Here"
                            />
                            <Button type="submit">Send</Button>
                        </From>
                    </DivBind>
                </FromWrapper>
                <ToastContainer />
            </FromArea>
        </FromContainer>
    );
}

export default ContactUs;
