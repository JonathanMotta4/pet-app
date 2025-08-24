import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card'

export const HistoryCard = () => {
  return (
    <div className='flex mx-auto w-full h-fit text-wrap'>
      <Card className='overflow-hidden flex-row justify-between py-6 px-4 mx-auto w-full rounded-xl border shadow-sm md:w-4/5'>
        <div className='flex flex-col gap-6'>
          <CardHeader className='space-y-2'>
            <CardTitle className='text-2xl text-shadow-sm font-heading text-green-primary dark:text-yellow-secondary'>
              Olá, é com imenso prazer que lhes apresento a PetBem!{' '}
            </CardTitle>
            <CardDescription>
              <p>
                Somos uma empresa que presta serviços médicos para seu pet no
                conforto e segurança da sua casa
                <br /> Atendemos em Viamão, Porto Alegre e Região
                Metropolitana/RS
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-2 mr-4 h-full text-left text-pretty'>
              <p className='text-2xl'>
                Benefícios do atendimento veterinário domiciliar:
              </p>
              <ol className='mx-2 list-decimal'>
                <li>Dedicação e atenção exclusiva para o paciente</li>
                <li>Comodidade e conforto para o tutor</li>
                <li>
                  Diminuição do estresse no transporte e contato com outros
                  animais
                </li>
                <li>
                  Evita o risco do contágio de doenças infecciosas,
                  principalmente em filhotes
                </li>
                <li>Preços compátiveis</li>
              </ol>
              <p className='mt-4 text-xl transition-colors hover:underline font-heading text-green-primary dark:text-yellow-secondary hover:text-shadow-sm'>
                Agende já uma avaliação para seu melhor amigo
              </p>
            </div>
          </CardContent>
        </div>
        <img
          src='https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
          className='hidden rounded-md lg:block lg:h-full'
        />
      </Card>
    </div>
  )
}
