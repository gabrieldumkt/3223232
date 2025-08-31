const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Banner Header */}
      <div className="w-full mb-2 flex justify-center">
        <img src="/lovable-uploads/657ffde2-9e66-4a6f-abec-7aa27348efe7.png" alt="Logos Portuguesa e Swiss Football League" className="h-20 object-contain" />
      </div>
      
      <div className="p-8 max-w-2xl mx-auto">
        <div className="space-y-6">
          
          <div className="mb-8">
            <h1 className="text-4xl font-black text-foreground mb-2">PROCESSO SELETIVO</h1>
            <p className="text-sm text-muted-foreground mb-4">31 AGO. 2025</p>
            <a href="/inscricao" className="inline-block bg-primary/10 border border-primary text-primary px-4 py-2 rounded text-sm font-medium hover:bg-primary/20 transition-colors">
              REALIZAR INSCRIÇÃO
            </a>
          </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Jogue profissionalmente na Suiça!</h2>
          
          <p className="text-foreground leading-relaxed mb-6">
            Saiba como se inscrever para participar da peneira oficial da Portuguesa em parceria com a Swiss Football League.
          </p>
          
          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-semibold text-foreground mb-3">Clubes Participantes:</h3>
            <ul className="text-sm text-foreground space-y-1">
              <li>• AC Bellinzona (3 vagas)</li>
              <li>• FC Aarau (2 vagas)</li>
              <li>• FC Baden (1 vaga)</li>
              <li>• FC Schaffhausen (4 vagas)</li>
              <li>• FC Sion (2 vagas)</li>
              <li>• FC Stade Nyonnais (3 vagas)</li>
              <li>• FC Thun (2 vagas)</li>
              <li>• Grasshoppers (Vagas Preenchidas)</li>
              <li>• FC Vaduz (4 vagas)</li>
              <li>• Neuchâtel Xamax FCS (3 vagas)</li>
              <li>• Stade Lausanne Ouchy (2 vagas)</li>
              <li>• Servette (3 vagas)</li>
              <li>• Winterthur (2 vagas)</li>
              <li>• Lugano (Vagas Preenchidas)</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Datas e Horários de Atendimento para Inscrições</h2>
          
          <p className="text-foreground leading-relaxed">
            Inscrições exclusivamente online através do formulário oficial.
          </p>
          
          <p className="text-foreground leading-relaxed">
            As inscrições serão encerradas automaticamente ao atingir 500 atletas confirmados.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Local e Data da Peneira</h2>
          
          <p className="text-foreground leading-relaxed">
            <strong>Local:</strong> Rod. Ayrton Senna, s/n - Km 16 - Cangaiba, São Paulo - SP (CT da Portuguesa)
          </p>
          
          <p className="text-foreground leading-relaxed">
            <strong>Data:</strong> 07 de Setembro de 2025
          </p>
          
          <p className="text-foreground leading-relaxed">
            <strong>Horário:</strong> 09h às 20h
          </p>
          
          <p className="text-foreground leading-relaxed">
            Cada atleta receberá, via WhatsApp, dia e horário específico da sua avaliação.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Requisitos de Participação</h2>
          
          <p className="text-foreground leading-relaxed">
            <strong>Idade:</strong> mínimo 19 anos e máximo 25 anos, comprovado em documento oficial.
          </p>
          
          <p className="text-foreground leading-relaxed">
            <strong>Documento obrigatório:</strong> RG ou Passaporte original no dia do teste.
          </p>
          
          <p className="text-foreground leading-relaxed">
            <strong>Traje obrigatório:</strong> chuteira, meião, short e camisa branca lisa.
          </p>
          
          <p className="text-foreground leading-relaxed">
            <strong>Inscrição:</strong> somente pelo <em>formulário online</em> (não haverá inscrições no local).
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Documentos Necessários no Dia da Avaliação</h2>
          
          <p className="text-foreground leading-relaxed">
            - RG ou Passaporte do atleta
          </p>
          
          <p className="text-foreground leading-relaxed">
            - Comprovante pagamento da taxa de inscrição
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Avisos Importantes</h2>
          
          <p className="text-foreground leading-relaxed">
            O clube não autoriza terceiros a realizarem peneiras ou seletivas em seu nome.
          </p>
          
          <p className="text-foreground leading-relaxed">
            Apenas a organização oficial da <strong>Portuguesa</strong> em parceria com a <strong>Swiss Football League</strong> é responsável por este processo.
          </p>
          
          <p className="text-foreground leading-relaxed">
            Atletas fora da faixa etária não serão aceitos.
          </p>
          
          <p className="text-foreground leading-relaxed">
            Atletas sem documentação serão automaticamente desclassificados.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <a href="/inscricao" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors">
            REALIZAR INSCRIÇÃO
          </a>
        </div>

        </div>
      </div>
    </div>;
};
export default Index;