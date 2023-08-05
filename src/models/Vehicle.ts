import { Mark } from "./Mark";
import { Model } from "./Model";
import { Combustivel } from "./enums/CombustivelEnum";

export interface Vehicle {
  veiculoId: number;
  marcaId: number;
  marca: Mark;
  modeloId: number;
  modelo: Model;
  ano: number;
  cor: string;
  observacoes: string;
  imagemURL: string;
  preco: number;
  combustivel: Combustivel;
  versao: string;
  marcaNome: string;
  numeroPortas: number;
  transmissao: string;
  cilindrada: number;
  potencia: number;
  novidade: boolean;
}
