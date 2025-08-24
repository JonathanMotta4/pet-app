import {
  InstagramLogoIcon,
  WhatsappLogoIcon
} from '@phosphor-icons/react/dist/ssr'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card'
import { Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
export const ContactCard = () => {
  return (
    <div className='flex mx-auto w-full h-fit text-wrap'>
      <Card className='overflow-hidden flex-col justify-between py-6 px-4 mx-auto w-full rounded-xl border shadow-sm md:flex-row md:mx-auto md:w-4/5'>
        <div className='flex flex-col gap-6'>
          <CardHeader className='space-y-2'>
            <CardTitle className='text-2xl text-shadow-sm font-heading text-green-primary dark:text-yellow-secondary'>
              Contato e Localização
            </CardTitle>
            <CardDescription>
              <p>
                Tem alguma dúvida ou precisa de ajuda? Nossa equipe está à
                disposição para cuidar do que seu pet precisar.{' '}
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-2 mr-4 h-full text-left text-pretty'>
              <ul className='flex flex-col gap-4'>
                <li>
                  <Link
                    href={
                      'https://api.whatsapp.com/send/?phone=5551985569550&text&type=phone_number&app_absent=0'
                    }
                    target='_blank'
                  >
                    <Button
                      type='button'
                      variant={'default'}
                      className='transition-colors dark:bg-green-primary dark:hover:bg-green-primary/90'
                    >
                      <WhatsappLogoIcon className='font-bold size-5' />
                      (51)98556-9550
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href={'mailto:petbem.rs@gmail.com'} target='_blank'>
                    <Button
                      type='button'
                      variant={'default'}
                      className='transition-colors dark:bg-green-primary dark:hover:bg-green-primary/90'
                    >
                      <Mail className='size-5' /> petbem.rs@gmail.com
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    href={'https://www.instagram.com/petbem.rs/'}
                    target='_blank'
                  >
                    <Button
                      type='button'
                      variant={'default'}
                      className='transition-colors dark:bg-green-primary dark:hover:bg-green-primary/90'
                    >
                      <InstagramLogoIcon className='size-5' /> petbem.rs
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    href={'https://maps.app.goo.gl/wsi8589cZMsjTAvK6'}
                    target='_blank'
                  >
                    <Button
                      type='button'
                      variant={'default'}
                      className='transition-colors dark:bg-green-primary dark:hover:bg-green-primary/90'
                    >
                      <MapPin className='size-5' /> Rua Marechal Rondon,18 -
                      Parque indio Jari - Viamão/RS
                    </Button>
                  </Link>
                </li>
              </ul>
              <Link
                href={
                  'https://api.whatsapp.com/send/?phone=5551985569550&text&type=phone_number&app_absent=0'
                }
                target='_blank'
              >
                <p className='mt-4 text-xl transition-colors hover:underline font-heading text-green-primary dark:text-yellow-secondary hover:text-shadow-sm'>
                  Agende já uma avaliação para seu melhor amigo
                </p>
              </Link>
            </div>
          </CardContent>
        </div>
        <iframe
          title='Mapa até a clinica'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.487498363784!2d-51.10034052444601!3d-30.051557774920088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95199d9a8f1ff8bf%3A0xb5719909d2c78247!2sPetBem%20Cl%C3%ADnica%20Veterin%C3%A1ria!5e0!3m2!1spt-BR!2sbr!4v1756045476215!5m2!1spt-BR!2sbr'
          width='600'
          height='450'
          allowFullScreen
          loading='lazy'
          className='sm:mx-auto'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </Card>
    </div>
  )
}
