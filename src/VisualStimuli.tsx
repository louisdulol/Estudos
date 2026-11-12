import React, { useState } from 'react';

import imgTirinhaRocaUniversidade from './assets/images/tirinha_roca_universidade_1794434647998.jpg';
import imgTirinhaBarrancoPesca from './assets/images/tirinha_barranco_pesca_1794434648956.jpg';
import imgCartazLiquidaPlanalto from './assets/images/cartaz_liquida_planalto_1794434648279.jpg';
import imgCartazShowNamorados from './assets/images/cartaz_show_namorados_1794434648525.jpg';
import imgQuadrosMonalisa from './assets/images/quadros_monalisa_releitura_1794434649507.jpg';
import imgTirinhaTvSatira from './assets/images/tirinha_tv_satira_1794434650110.jpg';
import imgTirinhaGatoCortina from './assets/images/tirinha_gato_cortina_1794434649538.jpg';
import imgChargeBolhaDigital from './assets/images/charge_bolha_digital_1794434650628.jpg';
import imgCampanhaUsoAgua from './assets/images/campanha_uso_agua_1794434650417.jpg';
import imgTirinhaArmandinho from './assets/images/tirinha_armandinho_mundo_1794434651412.jpg';
import imgTirinhaHumorDomestico from './assets/images/tirinha_humor_domestico_1794434651612.jpg';
import imgTirinhaRatosRomance from './assets/images/tirinha_ratos_romance_1794434652561.jpg';
import imgTirinhaTamborChoro from './assets/images/tirinha_tambor_choro_1794434653472.jpg';

interface VisualStimulusProps {
  id: string;
}

interface IllustratedCardProps {
  src: string;
  alt: string;
  aspectClass: string;
  fallbackTitle: string;
  children?: React.ReactNode;
}

const IllustratedStimulus: React.FC<IllustratedCardProps> = ({
  src,
  alt,
  aspectClass,
  fallbackTitle,
  children,
}) => {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl border border-slate-200 bg-[#FAF9F5]">
      {failed ? (
        <div
          className={`flex ${aspectClass} w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-6 text-center`}
        >
          <div className="space-y-1">
            <p className="text-sm font-semibold text-slate-800">{fallbackTitle}</p>
            <p className="text-xs text-slate-600">{alt}</p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className={`${aspectClass} w-full object-cover`}
        />
      )}
      {children}
    </figure>
  );
};

export const VisualStimulus: React.FC<VisualStimulusProps> = ({ id }) => {
  switch (id) {
    case 'tirinha-chico-universidade':
      return (
        <IllustratedStimulus
          src={imgTirinhaRocaUniversidade}
          alt="Tirinha em três quadros de dois amigos na zona rural conversando alegremente sobre estudar até se formar em uma universidade"
          aspectClass="aspect-[16/9]"
          fallbackTitle="Tirinha · Sonho de Universidade"
        >
          <figcaption className="grid grid-cols-1 gap-2 border-t border-slate-200 bg-white p-3.5 text-sm leading-relaxed text-slate-800 sm:grid-cols-3">
            <div className="rounded-lg bg-slate-50 p-2.5">
              <div className="text-xs font-semibold text-slate-500">1º Quadrinho</div>
              <p className="mt-1">“Eu é qui num posso nem pensá nisso! Quem mi dera!”</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-2.5">
              <div className="text-xs font-semibold text-slate-500">2º Quadrinho</div>
              <p className="mt-1">
                “Eu vô é tê qui istudá muito! Inté mi formá numa universidade!”
              </p>
            </div>
            <div className="rounded-lg bg-slate-50 p-2.5">
              <div className="text-xs font-semibold text-slate-500">3º Quadrinho</div>
              <p className="mt-1">
                “Daí vô arrumá um trabaio qui ajude as pessoa a vivê mió!” (Maurício de Sousa, adapt.)
              </p>
            </div>
          </figcaption>
        </IllustratedStimulus>
      );

    case 'tirinha-chico-lele':
      return (
        <IllustratedStimulus
          src={imgTirinhaBarrancoPesca}
          alt="Tirinha em dois quadros com dois amigos de chapéu de palha conversando à beira do barranco sobre o que querem ser quando crescer"
          aspectClass="aspect-[16/9]"
          fallbackTitle="Tirinha · À Beira do Barranco"
        >
          <figcaption className="grid grid-cols-1 gap-2 border-t border-slate-200 bg-white p-3.5 text-sm leading-relaxed text-slate-800 sm:grid-cols-2">
            <div className="rounded-lg bg-slate-50 p-2.5">
              <div className="text-xs font-semibold text-amber-800">1º Quadrinho · Chico Bento</div>
              <p className="mt-1">“...I ocê, Zé Lelé? O que vai sê quando crescê?”</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-2.5">
              <div className="text-xs font-semibold text-slate-700">2º Quadrinho · Zé Lelé</div>
              <p className="mt-1">“Acho que um baida dum lelezão!”</p>
            </div>
          </figcaption>
        </IllustratedStimulus>
      );

    case 'cartaz-liquida-planalto':
      return (
        <div className="mx-auto max-w-md">
          <IllustratedStimulus
            src={imgCartazLiquidaPlanalto}
            alt="Cartaz de campanha imobiliária com edifícios modernos e promotora segurando chave dourada"
            aspectClass="aspect-[4/3]"
            fallbackTitle="Campanha Imobiliária · Liquida Planalto"
          >
            <figcaption className="border-t border-slate-200 bg-slate-900 p-4 text-center text-white">
              <div className="text-xs font-semibold tracking-wider text-amber-300">
                CAMPANHA IMOBILIÁRIA · 14 A 16 DE JUNHO
              </div>
              <div className="mt-1 text-2xl font-bold tracking-tight">LIQUIDA PLANALTO</div>
              <div className="mt-0.5 text-sm font-semibold text-emerald-300">
                VEM QUE A CASA É SUA
              </div>
              <p className="mt-2 text-sm text-slate-200">
                Mega liquidação de casas e apartamentos na Av. Principal, próximo à Pracinha.
              </p>
              <p className="mt-1.5 text-xs text-slate-400">
                Venha preparado. Traga CPF, RG e comprovante de renda.
              </p>
            </figcaption>
          </IllustratedStimulus>
        </div>
      );

    case 'tirinha-armandinho':
      return (
        <IllustratedStimulus
          src={imgTirinhaArmandinho}
          alt="Tirinha com menino de cabelos azuis e adulto conversando sobre não se arrepender de tentar"
          aspectClass="aspect-[16/9]"
          fallbackTitle="Tirinha · Diálogo sobre Tentar"
        >
          <figcaption className="grid grid-cols-1 gap-2 border-t border-slate-200 bg-white p-3.5 text-sm leading-relaxed text-slate-800 sm:grid-cols-3">
            <div className="rounded-lg bg-slate-50 p-2.5">
              <div className="text-xs font-semibold text-slate-500">1º Quadrinho · Adulto</div>
              <p className="mt-1">“E então? Muito arrependido?”</p>
            </div>
            <div className="rounded-lg bg-sky-50 p-2.5">
              <div className="text-xs font-semibold text-sky-800">2º Quadrinho · Garoto</div>
              <p className="mt-1">“Claro que não!”</p>
            </div>
            <div className="rounded-lg bg-sky-50 p-2.5">
              <div className="text-xs font-semibold text-sky-800">3º Quadrinho · Garoto</div>
              <p className="mt-1">“Eu nunca saberia se não tivesse tentado!”</p>
            </div>
          </figcaption>
        </IllustratedStimulus>
      );

    case 'tirinha-ratos':
      return (
        <IllustratedStimulus
          src={imgTirinhaRatosRomance}
          alt="Tirinha com dois ratinhos na varanda sob céu estrelado recitando versos românticos"
          aspectClass="aspect-[16/9]"
          fallbackTitle="Tirinha · O Romântico"
        >
          <figcaption className="grid grid-cols-1 gap-2 border-t border-slate-200 bg-white p-3.5 text-sm leading-relaxed text-slate-800 sm:grid-cols-2">
            <div className="rounded-lg bg-slate-50 p-2.5">
              <div className="text-xs font-semibold text-slate-500">1º Quadrinho</div>
              <p className="mt-1">“Fala uma coisa romântica!”</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-2.5">
              <div className="text-xs font-semibold text-slate-500">2º Quadrinho</div>
              <p className="mt-1">
                “Meu amor é uma caravana de rosas vagando num deserto inefável de paixão!”
              </p>
            </div>
          </figcaption>
        </IllustratedStimulus>
      );

    case 'tirinha-cebolinha':
      return (
        <IllustratedStimulus
          src={imgTirinhaTamborChoro}
          alt="Tirinha com menino tocando tambor fazendo BUM BUM, mãe pedindo silêncio e menino chorando BUÁ"
          aspectClass="aspect-[16/9]"
          fallbackTitle="Tirinha · Tambor e Barulho"
        >
          <figcaption className="grid grid-cols-1 gap-2 border-t border-slate-200 bg-white p-3.5 text-sm leading-relaxed text-slate-800 sm:grid-cols-3">
            <div className="rounded-lg bg-slate-50 p-2.5 text-center">
              <div className="text-xs font-semibold text-slate-500">1º Quadrinho (Tambor)</div>
              <p className="mt-1 font-mono font-bold">BUM! BUM! BUM!</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-2.5">
              <div className="text-xs font-semibold text-slate-500">2º Quadrinho (Mãe)</div>
              <p className="mt-1">“Filho... quer parar de fazer barulho?”</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-2.5 text-center">
              <div className="text-xs font-semibold text-slate-500">3º Quadrinho (Choro)</div>
              <p className="mt-1 font-mono font-bold">BUÁÁÁ... BUÁÁÁ...</p>
            </div>
          </figcaption>
        </IllustratedStimulus>
      );

    case 'tirinha-calvin':
      return (
        <IllustratedStimulus
          src={imgTirinhaTvSatira}
          alt="Tirinha satírica de garoto ajoelhado diante da televisão segurando uma tigela de tapioca morna"
          aspectClass="aspect-[16/9]"
          fallbackTitle="Tirinha · Oferenda à Televisão"
        >
          <figcaption className="grid grid-cols-1 gap-2 border-t border-slate-200 bg-white p-3.5 text-sm leading-relaxed text-slate-800 sm:grid-cols-3">
            <div className="rounded-lg bg-slate-50 p-2.5">
              <div className="text-xs font-semibold text-slate-500">1º Quadrinho</div>
              <p className="mt-1">
                “Oh, poderoso da mídia de massa, obrigado por elevar a emoção, reduzir o pensamento
                e aniquilar a imaginação!”
              </p>
            </div>
            <div className="rounded-lg bg-slate-50 p-2.5">
              <div className="text-xs font-semibold text-slate-500">2º Quadrinho</div>
              <p className="mt-1">
                “Obrigado pela artificialidade das soluções rápidas e pela manipulação traiçoeira
                dos desejos humanos para fins comerciais.”
              </p>
            </div>
            <div className="rounded-lg bg-slate-50 p-2.5">
              <div className="text-xs font-semibold text-slate-500">3º Quadrinho</div>
              <p className="mt-1">
                “Esta tigela de tapioca morna representa meu cérebro. Mantenha sua luz oscilante
                para sempre.”
              </p>
            </div>
          </figcaption>
        </IllustratedStimulus>
      );

    case 'cartaz-sexta-feira':
      return (
        <div className="mx-auto max-w-md">
          <IllustratedStimulus
            src={imgCartazShowNamorados}
            alt="Cartaz musical com violão acústico e luzes quentes em palco para live especial de sexta-feira"
            aspectClass="aspect-[4/3]"
            fallbackTitle="Cartaz · Lives de Sexta-feira 12/6"
          >
            <figcaption className="border-t border-slate-200 bg-rose-950 p-4 text-center text-white">
              <div className="text-xs font-semibold tracking-wider text-rose-200">
                PROGRAMAÇÃO MUSICAL AO VIVO
              </div>
              <div className="mt-1 text-2xl font-bold">LIVES DE Sexta-feira</div>
              <div className="mt-1 font-mono text-2xl font-bold text-amber-300">12/6 · 20h</div>
              <p className="mt-2 text-xs font-medium text-rose-100">
                ESPECIAL DIA DOS NAMORADOS · TRANSMISSÃO ONLINE
              </p>
            </figcaption>
          </IllustratedStimulus>
        </div>
      );

    case 'quadros-monalisa':
      return (
        <IllustratedStimulus
          src={imgQuadrosMonalisa}
          alt="Díptico comparando à esquerda o quadro clássico Mona Lisa renascentista e à direita uma releitura em arte urbana grafite com óculos escuros"
          aspectClass="aspect-[16/9]"
          fallbackTitle="Comparação Artística · Obra Clássica e Releitura Urbana"
        >
          <figcaption className="grid grid-cols-1 gap-2 border-t border-slate-200 bg-white p-3.5 text-sm text-slate-800 sm:grid-cols-2">
            <div>
              <span className="font-semibold text-slate-900">Texto 1 · Pintura Original:</span>{' '}
              Retrato renascentista clássico de Leonardo da Vinci (século XVI).
            </div>
            <div>
              <span className="font-semibold text-slate-900">Texto 2 · Releitura Contemporânea:</span>{' '}
              Mural pop em grafite urbano com óculos escuros e jaqueta esportiva.
            </div>
          </figcaption>
        </IllustratedStimulus>
      );

    case 'tirinha-garfield':
      return (
        <div className="mx-auto max-w-lg">
          <IllustratedStimulus
            src={imgTirinhaGatoCortina}
            alt="Gato laranja enrolado na cortina verde da janela olhando resignado enquanto parodia verso famoso"
            aspectClass="aspect-[4/3]"
            fallbackTitle="Tirinha · Gato Enrolado na Cortina"
          >
            <figcaption className="space-y-2 border-t border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-800">
              <p>
                <span className="font-semibold text-slate-600">Quadros 1–4:</span> “ZIP! Aposto
                que vou ficar aqui até sábado. Que azar, estou eu enrolado numa cortina.”
              </p>
              <p className="font-medium text-slate-900">
                <span className="font-semibold text-slate-600">Quadro 5:</span> “Tinha uma cortina
                no caminho. No caminho tinha uma cortina. Nunca me esquecerei deste acontecimento.
                Tinha uma cortina no meio do caminho.”
              </p>
              <p className="text-xs text-slate-500">Quadro 6: “Epa, isto dá samba!” (Jim Davis)</p>
            </figcaption>
          </IllustratedStimulus>
        </div>
      );

    case 'tirinha-armando':
      return (
        <IllustratedStimulus
          src={imgTirinhaHumorDomestico}
          alt="Tirinha em dois quadros mostrando esposa com flor murcha e depois comparando o amor ao motor de um carro"
          aspectClass="aspect-[16/9]"
          fallbackTitle="Tirinha · Usando a Linguagem Dele"
        >
          <figcaption className="grid grid-cols-1 gap-2 border-t border-slate-200 bg-white p-3.5 text-sm leading-relaxed text-slate-800 sm:grid-cols-2">
            <div className="rounded-lg bg-slate-50 p-3">
              <div className="text-xs font-semibold text-slate-500">1º Quadrinho</div>
              <p className="mt-1">
                Esposa: “Acorda, Armando!!! Você não sabe que o amor é como uma flor? Se não for
                regada e bem cuidada ela murcha e morre!!!”
              </p>
              <p className="mt-1 font-medium text-slate-700">Armando: “Hã?!”</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-3">
              <div className="text-xs font-semibold text-slate-500">
                2º Quadrinho · “Usando a linguagem dele...”
              </div>
              <p className="mt-1">
                Esposa: “O amor é como o motor do carro, Armando! Se não trocar o óleo e não cuidar
                da mecânica uma hora ele não funciona mais!!!”
              </p>
              <p className="mt-1 font-medium text-slate-700">Armando: “Ah, entendi!”</p>
            </div>
          </figcaption>
        </IllustratedStimulus>
      );

    case 'charge-bolha-digital':
      return (
        <div className="mx-auto max-w-lg">
          <IllustratedStimulus
            src={imgChargeBolhaDigital}
            alt="Charge editorial ilustrando pedestres caminhando dentro de bolhas de vidro olhando para celulares ao passar diante de uma biblioteca pública"
            aspectClass="aspect-[4/3]"
            fallbackTitle="Charge · Bolhas Digitais na Cidade"
          >
            <figcaption className="border-t border-slate-200 bg-white p-3.5 text-sm text-slate-700">
              <span className="font-semibold text-slate-900">Leitura visual:</span> Pedestres
              isolados em bolhas individuais acompanham as telas dos celulares enquanto passam sem
              notar a Biblioteca Pública e os espaços coletivos da cidade.
            </figcaption>
          </IllustratedStimulus>
        </div>
      );

    case 'cartaz-agua-consciente':
      return (
        <div className="mx-auto max-w-md">
          <IllustratedStimulus
            src={imgCampanhaUsoAgua}
            alt="Cartaz educativo de preservação ambiental com gota de água cristalina abrigando folha verde ao lado de torneira"
            aspectClass="aspect-[4/3]"
            fallbackTitle="Campanha Pública · Cada Gota Preserva"
          >
            <figcaption className="border-t border-slate-200 bg-teal-950 p-4 text-center text-white">
              <div className="text-xs font-semibold tracking-wider text-teal-200">
                CAMPANHA DE CONSUMO CONSCIENTE
              </div>
              <div className="mt-1 text-xl font-bold">FECHE A TORNEIRA AO ENSABOAR</div>
              <p className="mt-1.5 text-sm text-teal-100">
                Pequenas atitudes diárias garantem água limpa e preservam as nascentes urbanas.
              </p>
            </figcaption>
          </IllustratedStimulus>
        </div>
      );

    case 'geo-angulos-suplementares':
      return (
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <svg
            viewBox="0 0 380 165"
            className="mx-auto h-44 w-full max-w-md"
            role="img"
            aria-label="Ângulos suplementares sobre reta horizontal medindo 3x menos 10 graus e x mais 30 graus"
          >
            <path d="M 180 125 L 136 125 A 44 44 0 0 1 208 91 Z" fill="#CCFBF1" opacity="0.7" />
            <path d="M 180 125 L 208 91 A 44 44 0 0 1 224 125 Z" fill="#FEF3C7" opacity="0.8" />
            <line x1="25" y1="125" x2="355" y2="125" stroke="#0F172A" strokeWidth="2.6" />
            <line x1="180" y1="125" x2="262" y2="28" stroke="#1D4ED8" strokeWidth="2.6" />
            <path d="M 136 125 A 44 44 0 0 1 208 91" fill="none" stroke="#0F766E" strokeWidth="2.4" />
            <path d="M 208 91 A 44 44 0 0 1 224 125" fill="none" stroke="#B45309" strokeWidth="2.4" />
            <circle cx="180" cy="125" r="4" fill="#1D4ED8" />
            <text x="108" y="90" fontSize="15" fontWeight="700" fill="#0F766E">
              3x − 10°
            </text>
            <text x="240" y="103" fontSize="15" fontWeight="700" fill="#B45309">
              x + 30°
            </text>
            <text x="190" y="149" textAnchor="middle" fontSize="12" fill="#475569">
              Reta horizontal (ângulo raso = 180°)
            </text>
          </svg>
        </div>
      );

    case 'geo-paralelas-transversal':
      return (
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <svg
            viewBox="0 0 380 185"
            className="mx-auto h-44 w-full max-w-md"
            role="img"
            aria-label="Duas retas paralelas r e s cortadas por uma reta transversal t"
          >
            <path d="M 148 52 L 176 52 A 28 28 0 0 0 129 31 Z" fill="#CCFBF1" />
            <path d="M 218 128 L 246 128 A 28 28 0 0 0 199 107 Z" fill="#FEF3C7" />
            <line x1="30" y1="52" x2="350" y2="52" stroke="#0F172A" strokeWidth="2.5" />
            <line x1="30" y1="128" x2="350" y2="128" stroke="#0F172A" strokeWidth="2.5" />
            <line x1="115" y1="14" x2="256" y2="168" stroke="#1D4ED8" strokeWidth="2.5" />
            <polyline points="75,47 83,52 75,57" fill="none" stroke="#475569" strokeWidth="1.8" />
            <polyline points="75,123 83,128 75,133" fill="none" stroke="#475569" strokeWidth="1.8" />
            <text x="36" y="42" fontSize="14" fontWeight="700" fill="#0F172A">
              r
            </text>
            <text x="36" y="118" fontSize="14" fontWeight="700" fill="#0F172A">
              s
            </text>
            <text x="262" y="166" fontSize="14" fontWeight="700" fill="#1D4ED8">
              t
            </text>
            <text x="305" y="42" fontSize="12" fontWeight="600" fill="#64748B">
              r // s
            </text>
            <text x="176" y="42" fontSize="14" fontWeight="700" fill="#0F766E">
              2x + 15°
            </text>
            <text x="234" y="117" fontSize="14" fontWeight="700" fill="#B45309">
              3x − 25°
            </text>
            <circle cx="148" cy="52" r="3.5" fill="#1D4ED8" />
            <circle cx="218" cy="128" r="3.5" fill="#1D4ED8" />
          </svg>
        </div>
      );

    case 'geo-semelhanca-tales':
      return (
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <svg
            viewBox="0 0 380 205"
            className="mx-auto h-48 w-full max-w-md"
            role="img"
            aria-label="Triângulo ABC com segmento DE paralelo à base BC"
          >
            <polygon points="190,22 72,172 308,172" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
            <polygon points="190,22 124,106 256,106" fill="#EFF6FF" opacity="0.85" />
            <line x1="124" y1="106" x2="256" y2="106" stroke="#1D4ED8" strokeWidth="2.6" />
            <polyline points="184,101 192,106 184,111" fill="none" stroke="#1D4ED8" strokeWidth="1.8" />
            <polyline points="184,167 192,172 184,177" fill="none" stroke="#0F172A" strokeWidth="1.8" />
            <text x="190" y="16" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0F172A">
              A
            </text>
            <text x="58" y="178" fontSize="14" fontWeight="700" fill="#0F172A">
              B
            </text>
            <text x="315" y="178" fontSize="14" fontWeight="700" fill="#0F172A">
              C
            </text>
            <text x="108" y="110" fontSize="14" fontWeight="700" fill="#1D4ED8">
              D
            </text>
            <text x="263" y="110" fontSize="14" fontWeight="700" fill="#1D4ED8">
              E
            </text>
            <text x="142" y="64" textAnchor="end" fontSize="13" fontWeight="700" fill="#0F766E">
              6 cm
            </text>
            <text x="86" y="144" textAnchor="end" fontSize="13" fontWeight="700" fill="#0F766E">
              3 cm
            </text>
            <text x="190" y="96" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1D4ED8">
              DE = 8 cm
            </text>
            <text x="190" y="193" textAnchor="middle" fontSize="13" fontWeight="700" fill="#B45309">
              BC = x (DE // BC)
            </text>
          </svg>
        </div>
      );

    case 'geo-ceviana-bissetriz':
      return (
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <svg
            viewBox="0 0 380 210"
            className="mx-auto h-48 w-full max-w-md"
            role="img"
            aria-label="Triângulo ABC com bissetriz interna AD partindo do vértice A"
          >
            <polygon points="180,26 68,162 308,162" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
            <line x1="180" y1="26" x2="164" y2="162" stroke="#1D4ED8" strokeWidth="2.4" strokeDasharray="6 3" />
            <path d="M 161 49 A 30 30 0 0 0 176 56" fill="none" stroke="#1D4ED8" strokeWidth="2" />
            <path d="M 176 56 A 30 30 0 0 0 198 48" fill="none" stroke="#1D4ED8" strokeWidth="2" />
            <path d="M 134 162 A 30 30 0 0 1 167 132" fill="#FEF3C7" opacity="0.85" />
            <text x="180" y="19" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0F172A">
              A
            </text>
            <text x="68" y="180" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0F172A">
              B (70°)
            </text>
            <text x="308" y="180" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0F172A">
              C (50°)
            </text>
            <text x="164" y="180" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1D4ED8">
              D
            </text>
            <text x="134" y="135" textAnchor="end" fontSize="12" fontWeight="700" fill="#B45309">
              ∠ADB = ?
            </text>
            <text x="188" y="200" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1D4ED8">
              AD = bissetriz interna de Â
            </text>
          </svg>
        </div>
      );

    case 'geo-poligono-hexagono':
      return (
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <svg
            viewBox="0 0 360 195"
            className="mx-auto h-44 w-full max-w-sm"
            role="img"
            aria-label="Polígono regular com diagonais partindo de um vértice e ângulos interno e externo"
          >
            <polygon
              points="170,28 236,64 236,128 170,164 104,128 104,64"
              fill="#F8FAFC"
              stroke="#0F172A"
              strokeWidth="2.5"
            />
            <line x1="170" y1="28" x2="236" y2="128" stroke="#1D4ED8" strokeWidth="1.6" strokeDasharray="4 3" />
            <line x1="170" y1="28" x2="170" y2="164" stroke="#1D4ED8" strokeWidth="1.6" strokeDasharray="4 3" />
            <line x1="170" y1="28" x2="104" y2="128" stroke="#1D4ED8" strokeWidth="1.6" strokeDasharray="4 3" />
            <line x1="236" y1="128" x2="296" y2="128" stroke="#B45309" strokeWidth="2" strokeDasharray="4 3" />
            <path d="M 218 138 A 20 20 0 0 1 236 108" fill="none" stroke="#0F766E" strokeWidth="2" />
            <path d="M 256 128 A 20 20 0 0 1 220 140" fill="none" stroke="#B45309" strokeWidth="2" />
            <text x="206" y="132" fontSize="11" fontWeight="700" fill="#0F766E">
              ai
            </text>
            <text x="262" y="148" fontSize="11" fontWeight="700" fill="#B45309">
              ae
            </text>
            <text x="175" y="185" textAnchor="middle" fontSize="12" fill="#475569">
              Polígono convexo · diagonais do vértice + ai + ae = 180°
            </text>
          </svg>
        </div>
      );

    case 'geo-tales-feixe':
      return (
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <svg
            viewBox="0 0 380 190"
            className="mx-auto h-44 w-full max-w-md"
            role="img"
            aria-label="Feixe de três retas paralelas r, s e t cortado por duas retas transversais"
          >
            <line x1="25" y1="40" x2="355" y2="40" stroke="#0F172A" strokeWidth="2.4" />
            <line x1="25" y1="95" x2="355" y2="95" stroke="#0F172A" strokeWidth="2.4" />
            <line x1="25" y1="158" x2="355" y2="158" stroke="#0F172A" strokeWidth="2.4" />
            <line x1="128" y1="15" x2="90" y2="178" stroke="#1D4ED8" strokeWidth="2.5" />
            <line x1="242" y1="15" x2="296" y2="178" stroke="#0F766E" strokeWidth="2.5" />
            <text x="35" y="33" fontSize="13" fontWeight="700" fill="#0F172A">
              r
            </text>
            <text x="35" y="88" fontSize="13" fontWeight="700" fill="#0F172A">
              s
            </text>
            <text x="35" y="151" fontSize="13" fontWeight="700" fill="#0F172A">
              t
            </text>
            <text x="310" y="32" fontSize="12" fontWeight="600" fill="#64748B">
              r // s // t
            </text>
            <circle cx="122" cy="40" r="3.5" fill="#1D4ED8" />
            <circle cx="109" cy="95" r="3.5" fill="#1D4ED8" />
            <circle cx="95" cy="158" r="3.5" fill="#1D4ED8" />
            <circle cx="250" cy="40" r="3.5" fill="#0F766E" />
            <circle cx="268" cy="95" r="3.5" fill="#0F766E" />
            <circle cx="289" cy="158" r="3.5" fill="#0F766E" />
            <text x="95" y="72" textAnchor="end" fontSize="13" fontWeight="700" fill="#1D4ED8">
              a
            </text>
            <text x="80" y="132" textAnchor="end" fontSize="13" fontWeight="700" fill="#1D4ED8">
              b
            </text>
            <text x="275" y="72" fontSize="13" fontWeight="700" fill="#0F766E">
              c
            </text>
            <text x="295" y="132" fontSize="13" fontWeight="700" fill="#0F766E">
              d
            </text>
            <text x="190" y="182" textAnchor="middle" fontSize="12" fill="#475569">
              Teorema de Tales: a / b = c / d
            </text>
          </svg>
        </div>
      );

    case 'geo-triangulo-altura':
      return (
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <svg
            viewBox="0 0 380 205"
            className="mx-auto h-48 w-full max-w-md"
            role="img"
            aria-label="Triângulo ABC com altura AH perpendicular à base BC e mediana AM ao ponto médio M"
          >
            <polygon points="150,28 55,158 320,158" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.4" />
            <line x1="150" y1="28" x2="150" y2="158" stroke="#1D4ED8" strokeWidth="2.2" />
            <line x1="150" y1="28" x2="188" y2="158" stroke="#0F766E" strokeWidth="2.2" strokeDasharray="5 3" />
            <rect x="150" y="144" width="14" height="14" fill="none" stroke="#1D4ED8" strokeWidth="1.8" />
            <circle cx="188" cy="158" r="3.5" fill="#0F766E" />
            <text x="150" y="20" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0F172A">
              A
            </text>
            <text x="48" y="175" fontSize="14" fontWeight="700" fill="#0F172A">
              B
            </text>
            <text x="322" y="175" fontSize="14" fontWeight="700" fill="#0F172A">
              C
            </text>
            <text x="148" y="176" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1D4ED8">
              H
            </text>
            <text x="192" y="176" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0F766E">
              M
            </text>
            <text x="188" y="197" textAnchor="middle" fontSize="12" fill="#475569">
              AH = altura (90° em H) · AM = mediana (BM = MC)
            </text>
          </svg>
        </div>
      );

    case 'geo-angulos-opv':
      return (
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <svg
            viewBox="0 0 360 165"
            className="mx-auto h-40 w-full max-w-md"
            role="img"
            aria-label="Duas retas concorrentes formando ângulos opostos pelo vértice congruentes"
          >
            <line x1="40" y1="130" x2="320" y2="35" stroke="#0F172A" strokeWidth="2.5" />
            <line x1="65" y1="32" x2="295" y2="132" stroke="#1D4ED8" strokeWidth="2.5" />
            <path d="M 145 94 A 40 40 0 0 1 143 66" fill="none" stroke="#0F766E" strokeWidth="2.5" />
            <path d="M 215 71 A 40 40 0 0 1 217 99" fill="none" stroke="#0F766E" strokeWidth="2.5" />
            <circle cx="180" cy="82.5" r="4" fill="#1D4ED8" />
            <text x="108" y="88" fontSize="14" fontWeight="700" fill="#0F766E">
              α
            </text>
            <text x="242" y="88" fontSize="14" fontWeight="700" fill="#0F766E">
              β
            </text>
            <text x="180" y="42" textAnchor="middle" fontSize="13" fontWeight="700" fill="#B45309">
              γ
            </text>
            <text x="180" y="152" textAnchor="middle" fontSize="12" fill="#475569">
              Ângulos opostos pelo vértice: α = β e α + γ = 180°
            </text>
          </svg>
        </div>
      );

    case 'geo-retangulo-escala':
      return (
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <svg
            viewBox="0 0 360 170"
            className="mx-auto h-40 w-full max-w-md"
            role="img"
            aria-label="Retângulo representando terreno ou sala para cálculo de área e perímetro"
          >
            <rect
              x="70"
              y="30"
              width="220"
              height="96"
              fill="#EFF6FF"
              stroke="#1D4ED8"
              strokeWidth="2.4"
            />
            <line x1="70" y1="142" x2="290" y2="142" stroke="#475569" strokeWidth="1.5" />
            <line x1="306" y1="30" x2="306" y2="126" stroke="#475569" strokeWidth="1.5" />
            <text x="180" y="158" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0F172A">
              Comprimento (b)
            </text>
            <text x="314" y="82" fontSize="13" fontWeight="700" fill="#0F172A">
              h
            </text>
            <text x="180" y="84" textAnchor="middle" fontSize="13" fontWeight="600" fill="#1D4ED8">
              Área = b × h
            </text>
          </svg>
        </div>
      );

    default:
      return null;
  }
};
