// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Leases extends APIResource {
  /**
   * Получить данные о договорах лизинга по заданным условиям
   *
   * @example
   * ```ts
   * const lease = await client.leases.create({
   *   key: 'key',
   *   limit: 0,
   *   offset: 0,
   * });
   * ```
   */
  create(params: LeaseCreateParams, options?: RequestOptions): APIPromise<LeaseCreateResponse> {
    const { key, limit, offset, ...body } = params;
    return this._client.post('/v1/leases', { query: { key, limit, offset }, body, ...options });
  }
}

/**
 * Договоры лизинга
 */
export interface LeaseCreateResponse {
  /**
   * Количество доступных запросов
   */
  available_count?: number;

  /**
   * Данные
   */
  data?: Array<LeaseCreateResponse.Data>;

  /**
   * Исключительная ситуация
   */
  error?: LeaseCreateResponse.Error;

  /**
   * Лимит
   */
  limit?: number;

  /**
   * Отступ
   */
  offset?: number;

  /**
   * Общее количество
   */
  total?: number;
}

export namespace LeaseCreateResponse {
  /**
   * Договор лизинга
   */
  export interface Data {
    id?: unknown;

    /**
     * Дата заключения договора
     */
    contractDate?: string;

    /**
     * Номер договора
     */
    contractNumber?: string;

    /**
     * Дата окончания финансовой аренды (лизинга)
     */
    endDate?: string;

    /**
     * GUID сообщения (базового)
     */
    guid?: string;

    /**
     * Техническое время последнего изменения
     */
    lastUpdated?: string;

    /**
     * Участник/публикатор сообщения
     */
    lessee?: Data.Lessee;

    /**
     * Участник/публикатор сообщения
     */
    lessor?: Data.Lessor;

    /**
     * Список связанных сообщений по договору
     */
    linkedMessages?: Array<Data.LinkedMessage>;

    /**
     * Тип сообщения (последнего)
     */
    msgType?:
      | 'CreditorIntentionGoToCourt'
      | 'DebtorIntentionGoToCourt'
      | 'FirmSupervisionPutIn'
      | 'AppearanceOfBankruptcySigns'
      | 'BankruptcyArticle8'
      | 'BankruptcyArticle9'
      | 'DebtorBankruptcyCourtNotification'
      | 'MoratoriumRejection'
      | 'AssetImpairment'
      | 'SroMembershipInfo'
      | 'SroMembershipInfo2'
      | 'SroMembershipCancel'
      | 'SroMembershipCancel2'
      | 'SroMembershipInfoChange'
      | 'SroMembershipInfoChange2'
      | 'SroStateRefutation'
      | 'FirmLiquidation'
      | 'FirmReorganization'
      | 'FirmRegisterExcludeTermination'
      | 'FirmAutonomousInstitutionCreation'
      | 'FirmCreated'
      | 'FirmRegisterExclude'
      | 'StopOfBusiness'
      | 'FirmAuthoritiesChange'
      | 'UnreliableInformation'
      | 'FinancialLeaseContract'
      | 'FinancialLeaseContract2'
      | 'ChangeFinancialLeaseContract'
      | 'ChangeFinancialLeaseContract2'
      | 'StopFinancialLeaseContract'
      | 'StopFinancialLeaseContract2'
      | 'FirmLicenseGranted'
      | 'FirmLicenseProhibited'
      | 'FirmLicenseReissued'
      | 'FirmLicenseRenewed'
      | 'FirmLicenseStopped'
      | 'FirmAuthorizedCapitalDecrease'
      | 'FirmAuthorizedCapitalIncrease'
      | 'FirmSharesAcquisition'
      | 'IntentionExerciseTheRightsOfShareholderNonResident'
      | 'SatisfactionExerciseTheRightsOfShareholderNonResident'
      | 'FirmMembersMeeting'
      | 'SaleOrLeaseEnterprise'
      | 'AnyOther'
      | 'RevocationOfPowerAttorney'
      | 'IntentionInheritanceOfLandProperty'
      | 'CreationRightOfPledge'
      | 'ChangeRightOfPledge'
      | 'StopRightOfPledge'
      | 'SaleOfPledgedSubjects'
      | 'StopSaleOfPledgedSubjects'
      | 'CreationRightOfPledge2'
      | 'ChangeRightOfPledge2'
      | 'StopRightOfPledge2'
      | 'MandatoryAssessment'
      | 'MandatoryAssessmentCustomer'
      | 'CreationSurety'
      | 'ChangeSurety'
      | 'StopSurety'
      | 'ConclusionContractOfSale'
      | 'ChangeContractOfSale'
      | 'StopContractOfSale'
      | 'CreationContractWithRetainOwnershipForSubject'
      | 'FirmAssetsValue'
      | 'FirmJuridicalAddressChanging'
      | 'FirmPostAddressChanged'
      | 'ChangeLocationDecision'
      | 'StatutoryAuditResults'
      | 'IssueIndependentGuarantee'
      | 'ChangeIndependentGuarantee'
      | 'CancelIndependentGuarantee'
      | 'DebtorsForeclosure'
      | 'FinancialStatementsDisclosure'
      | 'FinancingMonetaryRequirement'
      | 'ChangeFinancingMonetaryRequirement'
      | 'StopFinancingMonetaryRequirement'
      | 'FinancingMonetaryRequirementClient'
      | 'StopFinancingMonetaryRequirementClient'
      | 'ChangeFinancingMonetaryRequirementClient'
      | 'PlacementUnregisteredEstateInfo'
      | 'ChangeUnregisteredEstateInfo'
      | 'RemoveUnregisteredEstateInfo'
      | 'ConclusionConcessionAgreement'
      | 'ChangeConcessionAgreement'
      | 'StopConcessionAgreement'
      | 'CompletionStateRegistrationInfo'
      | 'RussianPostIntentionToRegisterOwnership'
      | 'RussianPostIntentionDisputeToRegisterOwnership'
      | 'RestrictionsInternationalFunds'
      | 'RightToBuyBackForeclosure'
      | 'ChangeRightToBuyBackForeclosure'
      | 'StopRightToBuyBackForeclosure'
      | 'CreationRestrictionOfRightsUnderContract'
      | 'CreationRightOfItemRetention'
      | 'ChangeRestrictionOfRightsUnderContract'
      | 'ChangeContractWithRetainOwnershipForSubject'
      | 'StopContractWithRetainOwnershipForSubject'
      | 'ChangeRightOfItemRetention'
      | 'StopRightOfItemRetention'
      | 'StopRestrictionOfRightsUnderContract'
      | 'ChangeRestrictionsInternationalFunds'
      | 'StopRestrictionsInternationalFunds'
      | 'SaleOfAccountReceivables'
      | 'StopSaleOfAccountReceivables'
      | 'FinancialStatementsDisclosure2'
      | 'ESG'
      | 'MessageAnnulment'
      | 'MessageAnnulment2'
      | 'MessageRefutation';

    /**
     * Дата публикации сообщения (последнего)
     */
    publishDate?: string;

    /**
     * Дата начала финансовой аренды (лизинга)
     */
    startDate?: string;

    /**
     * Статус: 0 - действующий, 1 - недействующий
     */
    status?: number;

    /**
     * Дата прекращения договора
     */
    stopDate?: string;

    /**
     * Причина прекращения договора
     */
    stopReason?: string;

    /**
     * Предметы финансовой аренды (лизинга)
     */
    subjects?: Array<Data.Subject>;

    /**
     * Дополнительная информация по договору
     */
    text?: string;
  }

  export namespace Data {
    /**
     * Участник/публикатор сообщения
     */
    export interface Lessee {
      /**
       * Данные участника/публикатора
       */
      data?: Lessee.Data;

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

    export namespace Lessee {
      /**
       * Данные участника/публикатора
       */
      export interface Data {
        /**
         * Наименование страны
         */
        country?: string;

        /**
         * Код/Наименование страны
         */
        countryCodeNum?: string;

        /**
         * ФИО (ФЛ/ИП/Нотариус/Оценщик)
         */
        fio?: string;

        /**
         * Наименование (ЮЛ)
         */
        fullName?: string;

        /**
         * ИНН
         */
        inn?: string;

        /**
         * ИНН или аналог
         */
        innOrAnalogue?: string;

        /**
         * Наименование на латинице (NonResidentCompany)
         */
        latinName?: string;

        /**
         * Наименование (NonResidentCompany/ForeignSystem)
         */
        name?: string;

        /**
         * ОГРН
         */
        ogrn?: string;

        /**
         * ОГРНИП
         */
        ogrnip?: string;

        /**
         * Регистрационный номер
         */
        regNum?: string;

        /**
         * Должность (Нотариус)
         */
        title?: string;
      }
    }

    /**
     * Участник/публикатор сообщения
     */
    export interface Lessor {
      /**
       * Данные участника/публикатора
       */
      data?: Lessor.Data;

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

    export namespace Lessor {
      /**
       * Данные участника/публикатора
       */
      export interface Data {
        /**
         * Наименование страны
         */
        country?: string;

        /**
         * Код/Наименование страны
         */
        countryCodeNum?: string;

        /**
         * ФИО (ФЛ/ИП/Нотариус/Оценщик)
         */
        fio?: string;

        /**
         * Наименование (ЮЛ)
         */
        fullName?: string;

        /**
         * ИНН
         */
        inn?: string;

        /**
         * ИНН или аналог
         */
        innOrAnalogue?: string;

        /**
         * Наименование на латинице (NonResidentCompany)
         */
        latinName?: string;

        /**
         * Наименование (NonResidentCompany/ForeignSystem)
         */
        name?: string;

        /**
         * ОГРН
         */
        ogrn?: string;

        /**
         * ОГРНИП
         */
        ogrnip?: string;

        /**
         * Регистрационный номер
         */
        regNum?: string;

        /**
         * Должность (Нотариус)
         */
        title?: string;
      }
    }

    /**
     * Список связанных сообщений по договору
     */
    export interface LinkedMessage {
      /**
       * Дата публикации сообщения
       */
      datePublish?: string;

      /**
       * GUID сообщения
       */
      guid?: string;

      /**
       * Номер сообщения
       */
      number?: string;

      /**
       * Тип сообщения
       */
      type?: LinkedMessage.Type;
    }

    export namespace LinkedMessage {
      /**
       * Тип сообщения
       */
      export interface Type {
        canonical?:
          | 'CreditorIntentionGoToCourt'
          | 'DebtorIntentionGoToCourt'
          | 'FirmSupervisionPutIn'
          | 'AppearanceOfBankruptcySigns'
          | 'BankruptcyArticle8'
          | 'BankruptcyArticle9'
          | 'DebtorBankruptcyCourtNotification'
          | 'MoratoriumRejection'
          | 'AssetImpairment'
          | 'SroMembershipInfo'
          | 'SroMembershipInfo2'
          | 'SroMembershipCancel'
          | 'SroMembershipCancel2'
          | 'SroMembershipInfoChange'
          | 'SroMembershipInfoChange2'
          | 'SroStateRefutation'
          | 'FirmLiquidation'
          | 'FirmReorganization'
          | 'FirmRegisterExcludeTermination'
          | 'FirmAutonomousInstitutionCreation'
          | 'FirmCreated'
          | 'FirmRegisterExclude'
          | 'StopOfBusiness'
          | 'FirmAuthoritiesChange'
          | 'UnreliableInformation'
          | 'FinancialLeaseContract'
          | 'FinancialLeaseContract2'
          | 'ChangeFinancialLeaseContract'
          | 'ChangeFinancialLeaseContract2'
          | 'StopFinancialLeaseContract'
          | 'StopFinancialLeaseContract2'
          | 'FirmLicenseGranted'
          | 'FirmLicenseProhibited'
          | 'FirmLicenseReissued'
          | 'FirmLicenseRenewed'
          | 'FirmLicenseStopped'
          | 'FirmAuthorizedCapitalDecrease'
          | 'FirmAuthorizedCapitalIncrease'
          | 'FirmSharesAcquisition'
          | 'IntentionExerciseTheRightsOfShareholderNonResident'
          | 'SatisfactionExerciseTheRightsOfShareholderNonResident'
          | 'FirmMembersMeeting'
          | 'SaleOrLeaseEnterprise'
          | 'AnyOther'
          | 'RevocationOfPowerAttorney'
          | 'IntentionInheritanceOfLandProperty'
          | 'CreationRightOfPledge'
          | 'ChangeRightOfPledge'
          | 'StopRightOfPledge'
          | 'SaleOfPledgedSubjects'
          | 'StopSaleOfPledgedSubjects'
          | 'CreationRightOfPledge2'
          | 'ChangeRightOfPledge2'
          | 'StopRightOfPledge2'
          | 'MandatoryAssessment'
          | 'MandatoryAssessmentCustomer'
          | 'CreationSurety'
          | 'ChangeSurety'
          | 'StopSurety'
          | 'ConclusionContractOfSale'
          | 'ChangeContractOfSale'
          | 'StopContractOfSale'
          | 'CreationContractWithRetainOwnershipForSubject'
          | 'FirmAssetsValue'
          | 'FirmJuridicalAddressChanging'
          | 'FirmPostAddressChanged'
          | 'ChangeLocationDecision'
          | 'StatutoryAuditResults'
          | 'IssueIndependentGuarantee'
          | 'ChangeIndependentGuarantee'
          | 'CancelIndependentGuarantee'
          | 'DebtorsForeclosure'
          | 'FinancialStatementsDisclosure'
          | 'FinancingMonetaryRequirement'
          | 'ChangeFinancingMonetaryRequirement'
          | 'StopFinancingMonetaryRequirement'
          | 'FinancingMonetaryRequirementClient'
          | 'StopFinancingMonetaryRequirementClient'
          | 'ChangeFinancingMonetaryRequirementClient'
          | 'PlacementUnregisteredEstateInfo'
          | 'ChangeUnregisteredEstateInfo'
          | 'RemoveUnregisteredEstateInfo'
          | 'ConclusionConcessionAgreement'
          | 'ChangeConcessionAgreement'
          | 'StopConcessionAgreement'
          | 'CompletionStateRegistrationInfo'
          | 'RussianPostIntentionToRegisterOwnership'
          | 'RussianPostIntentionDisputeToRegisterOwnership'
          | 'RestrictionsInternationalFunds'
          | 'RightToBuyBackForeclosure'
          | 'ChangeRightToBuyBackForeclosure'
          | 'StopRightToBuyBackForeclosure'
          | 'CreationRestrictionOfRightsUnderContract'
          | 'CreationRightOfItemRetention'
          | 'ChangeRestrictionOfRightsUnderContract'
          | 'ChangeContractWithRetainOwnershipForSubject'
          | 'StopContractWithRetainOwnershipForSubject'
          | 'ChangeRightOfItemRetention'
          | 'StopRightOfItemRetention'
          | 'StopRestrictionOfRightsUnderContract'
          | 'ChangeRestrictionsInternationalFunds'
          | 'StopRestrictionsInternationalFunds'
          | 'SaleOfAccountReceivables'
          | 'StopSaleOfAccountReceivables'
          | 'FinancialStatementsDisclosure2'
          | 'ESG'
          | 'MessageAnnulment'
          | 'MessageAnnulment2'
          | 'MessageRefutation';

        /**
         * Имя типа
         */
        name?: string;
      }
    }

    /**
     * Предметы финансовой аренды (лизинга)
     */
    export interface Subject {
      /**
       * Идентификатор предмета
       */
      id?: string;

      /**
       * Код классификатора
       */
      classifierCode?: string;

      /**
       * Расшифровка кода классификатора
       */
      classifierName?: string;

      /**
       * Описание предмета лизинга
       */
      description?: string;
    }
  }

  /**
   * Исключительная ситуация
   */
  export interface Error {
    /**
     * Код ошибки. Например: 1 - контрагент по заданным параметрам не найден
     */
    code?: number;

    /**
     * Описание
     */
    message?: string;

    /**
     * Параметры - входные данные, вызвавшие исключительную ситуацию
     */
    source?: { [key: string]: string };
  }
}

export interface LeaseCreateParams {
  /**
   * Query param: API-ключ.
   */
  key: string;

  /**
   * Query param: Лимит.
   */
  limit: number;

  /**
   * Query param: Оффсет.
   */
  offset: number;

  /**
   * Body param: Коды типа лизинга из классификатора (справочника)
   */
  classifier_codes?: Array<string>;

  /**
   * Body param: Дата прекращения договора: С (включительно)
   */
  lease_end_from?: string;

  /**
   * Body param: Дата прекращения договора: По (включительно)
   */
  lease_end_to?: string;

  /**
   * Body param: Дата заключения договора: С (включительно)
   */
  lease_start_from?: string;

  /**
   * Body param: Дата заключения договора: По (включит ельно)
   */
  lease_start_to?: string;

  /**
   * Body param: Только активные договора
   */
  only_active?: boolean;

  /**
   * Body param: Порядок сортировки
   */
  order?: 'ASC' | 'DESC';

  /**
   * Body param: Ключевые слова для поиска в реквизитах договора
   */
  search_text?: string;

  /**
   * Body param: Поле для сортировки результата
   */
  sort?: 'date_start' | 'date_end';

  /**
   * Body param: Дата последнего изменения: С (включительно)
   */
  updated_after?: string;
}

export declare namespace Leases {
  export { type LeaseCreateResponse as LeaseCreateResponse, type LeaseCreateParams as LeaseCreateParams };
}
