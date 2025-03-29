import { Component } from '@angular/core';
/**
 * Interface que define la estructura del objeto de títulos del menú
 * Cada propiedad es una clave de string que mapea a un título de string
 */
interface MenuTitles {
  [key: string]: string;
}
/**
 * Componente principal de la aplicación
 * Gestiona la navegación y el estado del menú activo
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App {
  /**
   * Objeto que mapea las claves del menú con sus títulos correspondientes
   * Se define como readonly para prevenir modificaciones accidentales
   */
  private readonly menuTitles: MenuTitles = {
    'panel': 'Panel',
    'documentos': 'Envíos de documentos',
    'smartdoc': 'SmartDoc',
    'historial': 'Historial',
    'equipo': 'Equipo',
    'soporte': 'Soporte técnico'
  };
    /**
   * Almacena la opción de menú actualmente seleccionada
   * Por defecto se inicializa en 'panel'
   */
  public activeMenu: string = 'panel';
  /**
   * Actualiza el menú activo cuando el usuario selecciona una nueva opción
   * @param menu - Identificador del menú seleccionado
   */
  public setActiveMenu(menu: string): void {
    this.activeMenu = menu;
  }
  /**
   * Obtiene el título correspondiente al menú activo actual
   * @returns El título del menú activo o una cadena vacía si no existe
   */
  public getMenuTitle(): string {
    return this.menuTitles[this.activeMenu] || '';
  }
}