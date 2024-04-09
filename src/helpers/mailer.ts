import User from '@/models/userModels';
import bcryptjs from 'bcryptjs';
import nodemailer from 'nodemailer'



export async function sendMail({ email, emailType, userID }: any) {

    try {

        // create hashed Token for verify by email
        const hashedToken = await bcryptjs.hash(userID.toString(), 10);


        if (emailType === 'VERIFY') {
            await User.findByIdAndUpdate(userID, {
                verifyToken: hashedToken,
                verifyTokenExpire: Date.now() + 3600000
            })
        } else if (emailType === 'RESET') {
            await User.findByIdAndUpdate(userID, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpire: Date.now() + 3600000
            })
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.USERFORMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {

            from: 'snehansbehera080903@gmail.com',
            to: email,
            subject: emailType === 'VERIFY' ? 'Verify your email' : 'Change your password',
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === 'VERIFY' ? 'Verify Your Email' : 'Change Your Password'}</p>`
        }
        const receiveMail = await transport.sendMail(mailOptions);
        return receiveMail;

    } catch (error: any) {
        throw new error(error.message)
    }


}