import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import InputMask from "react-input-mask";
const Inscricao = () => {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    cpf: "",
    dataNascimento: "",
    disponibilidadeTeste: "",
    disponibilidadeViagem: ""
  });
  const [erro, setErro] = useState("");
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação das disponibilidades
    if (formData.disponibilidadeTeste === "nao" || formData.disponibilidadeViagem === "nao") {
      setErro("Para participar da peneira, é obrigatório ter disponibilidade para ambas as datas.");
      return;
    }
    setErro("");
    setMostrarDetalhes(true);
    console.log("Dados do formulário:", formData);
  };
  return <div className="min-h-screen bg-background">
      {/* Banner Header */}
      <div className="w-full mb-2 flex justify-center">
        <img src="/lovable-uploads/657ffde2-9e66-4a6f-abec-7aa27348efe7.png" alt="Logos Portuguesa e Swiss Football League" className="h-20 object-contain" />
      </div>
      
      <div className="p-8 max-w-2xl mx-auto">
        <div className="space-y-6">
          
          {!mostrarDetalhes ? <>
              <div className="mb-8">
                <h1 className="text-4xl font-black text-foreground mb-2">PREENCHA OS DADOS</h1>
              </div>

              {erro && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {erro}
                </div>}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-foreground font-medium">Nome Completo</Label>
                  <Input id="nome" type="text" value={formData.nome} onChange={e => setFormData({
                ...formData,
                nome: e.target.value
              })} className="w-full" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-foreground font-medium">WhatsApp com DDD</Label>
                  <InputMask mask="(99) 99999-9999" value={formData.whatsapp} onChange={e => setFormData({
                ...formData,
                whatsapp: e.target.value
              })}>
                    {(inputProps: any) => <Input {...inputProps} id="whatsapp" type="tel" placeholder="(11) 99999-9999" className="w-full" required />}
                  </InputMask>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cpf" className="text-foreground font-medium">CPF</Label>
                  <InputMask mask="999.999.999-99" value={formData.cpf} onChange={e => setFormData({
                ...formData,
                cpf: e.target.value
              })}>
                    {(inputProps: any) => <Input {...inputProps} id="cpf" type="text" placeholder="000.000.000-00" className="w-full" required />}
                  </InputMask>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dataNascimento" className="text-foreground font-medium">Data de Nascimento</Label>
                  <Input id="dataNascimento" type="date" value={formData.dataNascimento} onChange={e => setFormData({
                ...formData,
                dataNascimento: e.target.value
              })} className="w-full" required />
                </div>

                <div className="space-y-3">
                  <Label className="text-foreground font-medium">Disponibilidade para fazer o teste no CT da Portuguesa dia 07 de Setembro às 9h?</Label>
                  <RadioGroup value={formData.disponibilidadeTeste} onValueChange={value => setFormData({
                ...formData,
                disponibilidadeTeste: value
              })} className="flex gap-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="teste-sim" />
                      <Label htmlFor="teste-sim" className="text-foreground">Sim</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="teste-nao" />
                      <Label htmlFor="teste-nao" className="text-foreground">Não</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label className="text-foreground font-medium">Disponibilidade para voar até a Suíça no dia 11 de Setembro caso seja aprovado?</Label>
                  <RadioGroup value={formData.disponibilidadeViagem} onValueChange={value => setFormData({
                ...formData,
                disponibilidadeViagem: value
              })} className="flex gap-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="viagem-sim" />
                      <Label htmlFor="viagem-sim" className="text-foreground">Sim</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="viagem-nao" />
                      <Label htmlFor="viagem-nao" className="text-foreground">Não</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="mt-8 flex justify-center">
                  <Button type="submit" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors">
                    CONTINUAR
                  </Button>
                </div>

              </form>
            </> : <>
              <div className="mb-8">
                <h1 className="text-4xl font-black text-foreground mb-2">DETALHES DA INSCRIÇÃO</h1>
              </div>

              <div className="space-y-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Valor da Taxa</h2>
                  <p className="text-3xl font-black text-primary mb-2">R$18,73</p>
                  <p className="text-muted-foreground">(dezoito reais e setenta e três centavos)</p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Por que essa taxa existe?</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>• Custeio dos treinadores e avaliadores</li>
                    <li>• Pagamento de funcionários de apoio e logística</li>
                    <li>• Manutenção da estrutura física utilizada</li>
                    <li>• Almoço e café da tarde garantidos aos participantes</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Doação obrigatória</h3>
                  <p className="text-lg font-semibold text-foreground mb-2">1 kg de alimento não perecível</p>
                  <p className="text-muted-foreground">Todo o arrecadado será destinado a instituições de caridade</p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Forma de pagamento</h3>
                  <div className="space-y-3">
                    <p className="text-foreground"><strong>Cartão de crédito:</strong> em até 3x de R$7,16</p>
                    <p className="text-foreground"><strong>PIX à vista:</strong> R$18,73</p>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <Button asChild className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors">
                    <a href="https://www.ggcheckout.com/checkout/v2/8KI282d8f69yGBWoFYQy" target="_blank" rel="noopener noreferrer">
                      REALIZAR INSCRIÇÃO
                    </a>
                  </Button>
                </div>
              </div>
            </>}
        </div>
      </div>
    </div>;
};
export default Inscricao;