import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export function SpecialtiesCard() {
  return (
    <div className='flex mx-auto w-full h-fit text-wrap'>
      <Card className='overflow-hidden flex-row gap-6 justify-between py-6 px-4 mx-auto w-full rounded-xl border shadow-sm md:mx-auto md:w-4/5 bg-card text-card-foreground'>
        <div className='flex flex-col gap-6'>
          <CardHeader className='space-y-2'>
            <CardTitle className='text-2xl text-shadow-sm font-heading text-green-primary dark:text-yellow-secondary'>
              Nossas especialidades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-6 mr-4 h-full text-left text-pretty'>
              <p className='text-lg'>
                Todos os nossos atendimentos estão disponíveis tanto na clínica
                quanto no conforto da sua casa
              </p>
              <ol className='mx-2'>
                <li>
                  <Tooltip>
                    <TooltipTrigger>Odontologia</TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Diagnóstico, prevenção e tratamento de doenças e
                        condições que afetam a saúde bucal de animais.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip>
                    <TooltipTrigger>Dermatologia</TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Diagnóstico, tratamento e prevenção de doenças de pele,
                        pelagem, unhas e orelhas em animais.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip>
                    <TooltipTrigger>Oncologia</TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Diagnóstico e tratamento de câncer, e tumores em animais
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip>
                    <TooltipTrigger>Cardiologia</TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Diagnóstico e tratamento de doenças do coração e do
                        sistema circulatório em animais{' '}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip>
                    <TooltipTrigger>Oftalmologia</TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Diagnóstico e tratamento das doenças oculares em animais
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip>
                    <TooltipTrigger>Endocrinologia </TooltipTrigger>
                    <TooltipContent>
                      <p>Tratamento dos distúrbios hormonais em animais </p>
                    </TooltipContent>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip>
                    <TooltipTrigger>Ortopedia</TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Diagnóstico e tratamento de lesões e doenças
                        relacionadas ao sistema musculoesquelético em animais
                        (ossos, articulações, músculos, ligamentos e tendões)
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip>
                    <TooltipTrigger>Gastroenterologia</TooltipTrigger>

                    <TooltipContent>
                      <p>
                        Diagnóstico e tratamento de doenças do sistema digestivo
                        de animais
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </li>

                <li>
                  <Tooltip>
                    <TooltipTrigger>Nefrologia </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Prevenção, diagnóstico e tratamento das doenças do
                        sistema urinário em animais
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </li>

                <li>
                  <Tooltip>
                    <TooltipTrigger>Neurologia</TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Diagnóstico e tratamento de distúrbios neurológicos em
                        animais
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip>
                    <TooltipTrigger>Fisioterapia </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Prevenção, tratamento e reabilitação de disfunções
                        musculoesqueléticas, neurológicas e articulares em
                        animais
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </li>
                {/* <li>
                //   <Tooltip>
                //     <TooltipTrigger>Clinica de Felinos</TooltipTrigger>
                //     <TooltipContent>
                //       <p>
                //         Lorem ipsum dolor sit, amet consectetur adipisicing
                //         elit. Est, quo.
                //       </p>
                //     </TooltipContent>
                //   </Tooltip>
                // </li>
                // <li>
                //   <Tooltip>
                //     <TooltipTrigger>Clinica de Silvestres</TooltipTrigger>
                //     <TooltipContent>
                //       <p>
                //         Lorem ipsum dolor sit, amet consectetur adipisicing
                //         elit. Est, quo.
                //       </p>
                //     </TooltipContent>
                //   </Tooltip>
                // </li> */}
              </ol>
            </div>
          </CardContent>
        </div>
        <img
          src='https://images.unsplash.com/photo-1642513730712-2ccba1dbef1e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
          className='hidden rounded-md md:block md:h-full'
        />
      </Card>
    </div>
  )
}
