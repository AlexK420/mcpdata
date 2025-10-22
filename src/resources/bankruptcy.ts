// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Bankruptcy extends APIResource {
  /**
   * Получить признаки банкротства контрагента
   */
  retrieve(
    query: BankruptcyRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BankruptcyRetrieveResponse> {
    return this._client.get('/v1/bankruptcy', { query, ...options });
  }
}

/**
 * Ответ: банкротства
 */
export interface BankruptcyRetrieveResponse {
  /**
   * Количество доступных запросов
   */
  available_count?: number;

  /**
   * Данные
   */
  data?: Array<BankruptcyRetrieveResponse.Data>;

  /**
   * Размер страницы
   */
  limit?: number;

  /**
   * Смещение страницы
   */
  offset?: number;

  /**
   * Всего записей
   */
  total?: number;
}

export namespace BankruptcyRetrieveResponse {
  /**
   * Банкротство
   */
  export interface Data {
    /**
     * Текст сообщения
     */
    content?: string;

    /**
     * GUID сообщения
     */
    guid?: string;

    /**
     * Номер сообщения
     */
    number?: string;

    /**
     * Участники сообщения, лица упомянутые в сообщении
     */
    participants?: Array<Data.Participant>;

    /**
     * Дата публикации сообщения
     */
    publish_date?: string;

    /**
     * Участник
     */
    publisher?: Data.Publisher;

    /**
     * Тип сообщения (описание)
     */
    type_description?: string;

    /**
     * Тип сообщения
     */
    type_name?:
      | 'CreditorIntentionGoToCourt'
      | 'DebtorIntentionGoToCourt'
      | 'BankruptcyArticle8'
      | 'BankruptcyArticle9'
      | 'AssetImpairment'
      | 'AppearanceOfBankruptcySigns'
      | 'DebtorBankruptcyCourtNotification'
      | 'FirmSupervisionPutIn'
      | 'MoratoriumRejection';
  }

  export namespace Data {
    /**
     * Участник
     */
    export interface Participant {
      /**
       * Наименование/ФИО
       */
      full_name?: string;

      /**
       * ИНН
       */
      inn?: string;

      /**
       * ОГРН/ОГРНИП
       */
      ogrn?: string;

      /**
       * Роль участника (не заполняется для публикатора)
       */
      role?:
        | 'Mortgagor'
        | 'Mortgagee'
        | 'Guarantor'
        | 'Principal'
        | 'Beneficiary'
        | 'OtherGuaranteeContractor'
        | 'Lessor'
        | 'Lessee'
        | 'MonetaryClient'
        | 'MonetaryDebtor'
        | 'FinancialAgent'
        | 'Seller'
        | 'Buyer'
        | 'Grantor'
        | 'Concessionaire'
        | 'EstateOwner'
        | 'Debtor'
        | 'CommonParticipant'
        | 'ReorganizationCompany'
        | 'Sro'
        | 'Expert'
        | 'Creditor'
        | 'Appraiser'
        | 'Customer'
        | 'Owner'
        | 'Auditee'
        | 'Auditor'
        | 'Renter'
        | 'Landlord'
        | 'Founder'
        | 'ParticipantWithRightToBuyBack'
        | 'ObligedParty'
        | 'ParticipantInterestedInRightsRestriction'
        | 'ParticipantWithRestrictedRights'
        | 'ParticipantHoldingItem'
        | 'DebtCollector'
        | 'Organizer'
        | 'ControllingPerson'
        | 'ControlledNonResidentCompany'
        | 'Company'
        | 'TradeOrganizer';

      /**
       * Тип участника
       */
      type?:
        | 'Company'
        | 'IndividualEntrepreneur'
        | 'Person'
        | 'Appraiser'
        | 'NonResidentCompany'
        | 'ForeignSystem'
        | 'Notary';
    }

    /**
     * Участник
     */
    export interface Publisher {
      /**
       * Наименование/ФИО
       */
      full_name?: string;

      /**
       * ИНН
       */
      inn?: string;

      /**
       * ОГРН/ОГРНИП
       */
      ogrn?: string;

      /**
       * Роль участника (не заполняется для публикатора)
       */
      role?:
        | 'Mortgagor'
        | 'Mortgagee'
        | 'Guarantor'
        | 'Principal'
        | 'Beneficiary'
        | 'OtherGuaranteeContractor'
        | 'Lessor'
        | 'Lessee'
        | 'MonetaryClient'
        | 'MonetaryDebtor'
        | 'FinancialAgent'
        | 'Seller'
        | 'Buyer'
        | 'Grantor'
        | 'Concessionaire'
        | 'EstateOwner'
        | 'Debtor'
        | 'CommonParticipant'
        | 'ReorganizationCompany'
        | 'Sro'
        | 'Expert'
        | 'Creditor'
        | 'Appraiser'
        | 'Customer'
        | 'Owner'
        | 'Auditee'
        | 'Auditor'
        | 'Renter'
        | 'Landlord'
        | 'Founder'
        | 'ParticipantWithRightToBuyBack'
        | 'ObligedParty'
        | 'ParticipantInterestedInRightsRestriction'
        | 'ParticipantWithRestrictedRights'
        | 'ParticipantHoldingItem'
        | 'DebtCollector'
        | 'Organizer'
        | 'ControllingPerson'
        | 'ControlledNonResidentCompany'
        | 'Company'
        | 'TradeOrganizer';

      /**
       * Тип участника
       */
      type?:
        | 'Company'
        | 'IndividualEntrepreneur'
        | 'Person'
        | 'Appraiser'
        | 'NonResidentCompany'
        | 'ForeignSystem'
        | 'Notary';
    }
  }
}

export interface BankruptcyRetrieveParams {
  /**
   * API-ключ.
   */
  key: string;

  /**
   * ИНН организации или ИП. Должен быть указан, если не указан ОГРН/ОГРНИП.
   */
  inn?: string;

  /**
   * Количество договоров на странице(максимум 1000).
   */
  limit?: number;

  /**
   * Отступ страницы
   */
  offset?: number;

  /**
   * ОГРН или ОГРНИП. Должен быть указан, если не указан ИНН.
   */
  ogrn?: string;
}

export declare namespace Bankruptcy {
  export {
    type BankruptcyRetrieveResponse as BankruptcyRetrieveResponse,
    type BankruptcyRetrieveParams as BankruptcyRetrieveParams,
  };
}
