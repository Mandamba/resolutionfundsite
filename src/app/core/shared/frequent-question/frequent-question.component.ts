import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FrequentQuestionsService } from '../../../services/frequent-questions.service';

@Component({
  selector: 'app-frequent-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frequent-question.component.html',
  styleUrls: ['./frequent-question.component.scss']
})
export class FrequentQuestionComponent {
  faqs = [
    { question: 'O que é o Fundo de Resolução (FdR)?', answer: 'O Fundo de Resolução é uma pessoa colectiva de direito público, dotada de autonomia administrativa e financeira, que tem por objecto principal prestar apoio financeiro à aplicação de medidas de resolução determinada pelo Banco Nacional de Angola.' },
    { question: 'Aonde estará localizado o Fundo de resolução?', answer: 'O Fundo de Resolução tem a sua sede em Luanda e funciona junto do Banco Nacional de Angola, que assegura nos termos do disposto no nº 1 do artigo 311º do RGIF, os serviços técnicos e administrativos indispensáveis ao seu bom funcionamento.' },
    { question: 'Quais os recursos ou mecanismos de financiamento de que dispõe o Fundo de Resolução?', answer: 'O Fundo é integralmente financiado pelo sector financeiro, através de contribuições iniciais das Instituições Financeiras participantes, Contribuições periódicas das Instituições Financeiras participantes, Importâncias provenientes de empréstimos, Rendimentos da aplicação de recursos, Liberalidades e quaisquer outras receitas, rendimentos ou valores que provenham da sua actividade ou que por lei ou contrato lhe sejam atribuídos, incluindo os montantes recebidos da Instituição Financeira Bancária ou da instituição de transição, bem como de Apoio financeiro excepcional do Estado.' },
    { question: 'Que gere o Fundo de Resolução?', answer: 'O Fundo de Resolução é gerido por uma Comissão Diretiva composta por três membros: (i) o presidente, que é membro do Conselho de Administração do Banco Nacional de Angola por este designado; (ii) um membro designado pelo Departamento Ministerial responsável pela área das Finanças Públicas e (iii) um terceiro membro designado, por acordo, entre o BNA e o Departamento Ministerial responsável pela área das Finanças Públicas.' },
    { question: 'Como é feita a fiscalização da actividade do Fundo de Resolução?', answer: 'A actividade do Fundo de Resolução é acompanhada pelo Comité de Auditoria do BNA, que é o órgão responsável pela supervisão dos mecanismos de auditoria interna e externa, cuja missão é fiscalizar e acompanhar a actividade do Fundo, zelar pelo cumprimento das leis e regulamentos e emitir parecer acerca das contas anuais.' },
    { question: 'Em que momento o Fundo de Resolução deve ser accionado?', answer: 'No caso de os custos finais das medidas de resolução aplicada virem a ser superiores ao esforço assumido pelos accionistas e credores subordinados, os custos serão suportados pelo sector financeiro, através do Fundo de Resolução (FdR), de modos a assegurar que assim, no final, esta operação não envolve custos para o erário.' },
    { question: 'Quais as instituições financeiras que participam no Fundo de Resolução?', answer: 'Participam obrigatoriamente no Fundo de Resolução todas as Instituições Financeiras Bancárias autorizadas, as filiais das IFBs com sede no estrangeiro, as Sociedades relevantes para o SFA, sujeitas à supervisão prudencial do Banco Nacional de Angola, e outras qualificadas por lei.' },
    { question: 'Qual o papel do Fundo de Resolução na resolução das IFs?', answer: 'Fundo de Resolução tem um papel essencial na resolução das Instituições Financeiras, face a medida de resolução aplicada, ex.: nos casos em que i) O capital social do Banco de Transição designado ser totalmente detido pelo Fundo de Resolução; e ii) A Comissão Diretiva do Fundo de Resolução propor ao BNA a nomeação dos membros dos órgãos de administração e de fiscalização do banco de transição designado, nos termos do regime legal aplicável.' },
    { question: 'Qual a diferença entre o Fundo de Resolução e o Fundo de Garantia de Deposito?', answer: 'Apesar de as duas entidades contribuírem para a protecção dos depositantes e para o reforço da confiança no sistema bancário (e, por essa via, para a salvaguarda da estabilidade do sistema financeiro), existem importantes diferenças entre o Fundo de Resolução e o Fundo de Garantia de Depósitos: Fundo de Resolução (FdR) tem como Missão: prestar apoio financeiro à aplicação de medidas de resolução adoptadas pelo BNA. Quanto a participação no regime de resolução, é obrigatória, com vista à realização do seu capital social. Fundo de Garantia de Depósitos (FGD): tem como Missão: garantir o reembolso de depósitos constituídos nas instituições financeiras bancárias autorizadas a receber depósitos do público e que participem no FGD, para os depositantes elegíveis e até ao máximo de 12.500.000,00 milhões Akz/por depositante. Quanto a participação no regime de resolução, o FGD pode apoiar financeiramente a instituição financeira em dificuldades, que estejam em resolução, desde que os activos transferidos sejam inferiores aos depósitos cobertos.' },
    { question: 'O que é feito com os recursos disponíveis do Fundo de Resolução?', answer: 'O Fundo de Resolução disponibiliza os recursos determinados pelo Banco Nacional de Angola para efeitos da aplicação de medidas de resolução. O Fundo de Resolução aplica os recursos disponíveis em operações financeiras, mediante plano de aplicações acordado com o Banco Nacional de Angola.' },
  ];
  frequentQuestions : any[] = []
  visibleFaqs : any = [];
  itemsToShow = 4;
  hasMoreFaqs = true;
  canLoadLess = false;
  activeIndex: number | null = null;

  constructor(private questionService : FrequentQuestionsService) {
    this.loadMore();
  }

  toggleAccordion(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  loadMore(): void {
    const nextItems = this.faqs.slice(this.visibleFaqs.length, this.visibleFaqs.length + this.itemsToShow);
    this.visibleFaqs = [...this.visibleFaqs, ...nextItems];

    if (this.visibleFaqs.length >= this.faqs.length) {
      this.hasMoreFaqs = false;
    }
    this.canLoadLess = this.visibleFaqs.length > this.itemsToShow;
  }

  loadLess(): void {
    const reducedItems = this.faqs.slice(0, this.visibleFaqs.length - this.itemsToShow);
    this.visibleFaqs = reducedItems;
    this.hasMoreFaqs = this.visibleFaqs.length < this.faqs.length;
    this.canLoadLess = this.visibleFaqs.length > this.itemsToShow;
  }

  public getAllFrequentQuestions() {
    this.questionService.getFrequentQuestions().subscribe(
      (data) => {
        this.frequentQuestions = data;
      },
      (error) => {
        console.error('Erro ao obter dados:', error);
      }
    );
  }
}
