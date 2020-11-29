import { Injectable } from '@angular/core';
import { AbstractTableData } from '../../shared/abstract.table.data';

@Injectable({
  providedIn: 'root'
})
export class CarsListTableService extends AbstractTableData {

  constructor() { super(); }

  getData() {
    return [
      { sku: "1", marca: 'Ford', modelo: 'Maverick GT', placa: 'ABC-1111', price: 70000.00, color: "Amarelo encarnação" },
      { sku: "2", marca: 'Chevrolet', modelo: 'Opala SS', placa: 'ABC-2222', price: 40000.00, color: "Preto sepultura" },
      { sku: "3", marca: 'Ford', modelo: 'Mustang GT', placa: 'ABC-3333', price: 70000.00, color: "Vermelho vermelho" },
      { sku: "4", marca: 'Volkswagen', modelo: 'Fusca 1600', placa: 'ABC-4444', price: 5000.00, color: "Branco de velho" },
      { sku: "5", marca: 'Ford', modelo: 'Del Rey', placa: 'ABC-5555', price: 6000.00, color: "Azul puxa cigarro" },
      { sku: "6", marca: 'Chevrolet', modelo: 'Monza', placa: 'ABC-6666', price: 70000.00, color: "Bordo muamba" },
      { sku: "7", marca: 'Ford', modelo: 'Fusion', placa: 'ABC-7777', price: 100000.00, color: "Branco tubarão" },
      { sku: "8", marca: 'Mini', modelo: 'Cooper', placa: 'ABC-8888', price: 45500.00, color: "Amarelo Mr. Bean" },
      { sku: "9", marca: 'Fiat', modelo: 'Brava', placa: 'ABC-9999', price: 7000.00, color: "Verde pepino" },
      { sku: "10", marca: 'Fiat', modelo: 'Marea', placa: 'ABC-1010', price: 12000.00, color: "Preto fundido" },
      { sku: "11", marca: 'Volkswagen', modelo: 'Fusca', placa: 'ABC-1110', price: 8000.00, color: "Branco Herbie" },
      
    ];
  }

  getColumns() {
    return {
      sku: {
        title: 'SKU',
        type: 'string',
        filter: true,
        width: '5%',
      },
      marca: {
        title: 'Marca',
        type: 'string',
        filter: true,
        width: '15%',
      },
      modelo: {
        title: 'Modelo',
        type: 'string',
        filter: true,
        width: '15%',
      },
      placa: {
        title: 'Placa',
        type: 'string',
        filter: true,
        width: '10%',
      },
      price: {
        title: 'Valor Fipe',
        type: 'number',
        filter: true,
        width: '10%',
      },
      color: {
        title: 'Cor',
        type: 'string',
        filter: true,
        width: '10%',
      },
    }
  };

}
