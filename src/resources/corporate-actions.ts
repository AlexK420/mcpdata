// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class CorporateActions extends APIResource {
  /**
   * Получить данные о корпоративных действиях из ФедРесурса
   */
  list(query: CorporateActionListParams, options?: RequestOptions): APIPromise<CorporateActionListResponse> {
    return this._client.get('/v1/corporateActions', { query, ...options });
  }
}

/**
 * Данные Федресурса
 */
export interface CorporateActionListResponse {
  /**
   * Количество доступных запросов
   */
  available_count?: number;

  /**
   * Данные
   */
  data?: Array<CorporateActionListResponse.Data>;

  /**
   * Исключительная ситуация
   */
  error?: CorporateActionListResponse.Error;

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

export namespace CorporateActionListResponse {
  /**
   * Выжимка сообщения Федресурса, см.
   * https://fedresurs.ru/helps/Sfacts/MessagesService_3.6.3.pdf пп3.2.2,4.2.2
   */
  export interface Data {
    /**
     * Признак аннулирования
     */
    annuled?: boolean;

    /**
     * Нотариус
     */
    arbitrManagerInfo?: Data.ArbitrManagerInfo;

    /**
     * Дополнительные сведения по сообщению
     */
    contentAdditionalInfo?: Data.ContentAdditionalInfo;

    /**
     * Дата размещения сообщения в интернет
     */
    dateDisclosure?: string;

    /**
     * Дата публикации сообщения
     */
    datePublish?: string;

    /**
     * GUID сообщения
     */
    guid?: string;

    /**
     * Признак заблокированности
     */
    locked?: boolean;

    /**
     * Ссылка на исходное сообщение
     */
    messageUrl?: string;

    /**
     * Тип сообщения
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
     * Нотариус
     */
    notaryInfo?: Data.NotaryInfo;

    /**
     * Номер сообщения
     */
    number?: string;

    /**
     * Участники сообщения, лица упомянутые в сообщении
     */
    participants?: Array<Data.Participant>;

    /**
     * Участник/публикатор сообщения
     */
    publisher?: Data.Publisher;

    /**
     * Текст сообщения
     */
    text?: string;

    /**
     * Техническое время последнего изменения
     */
    updatedAt?: number;
  }

  export namespace Data {
    /**
     * Нотариус
     */
    export interface ArbitrManagerInfo {
      /**
       * ФИО
       */
      name?: string;

      /**
       * Должность
       */
      title?: string;
    }

    /**
     * Дополнительные сведения по сообщению
     */
    export interface ContentAdditionalInfo {
      /**
       * Сведения об упомянутых компаниях
       */
      companies?: Array<ContentAdditionalInfo.Company>;

      /**
       * Базовые сведения об упомянутых сообщениях
       */
      message?: ContentAdditionalInfo.Message;
    }

    export namespace ContentAdditionalInfo {
      /**
       * Данные участника/публикатора
       */
      export interface Company {
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

      /**
       * Базовые сведения об упомянутых сообщениях
       */
      export interface Message {
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
        type?: Message.Type;
      }

      export namespace Message {
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
    }

    /**
     * Нотариус
     */
    export interface NotaryInfo {
      /**
       * ФИО
       */
      name?: string;

      /**
       * Должность
       */
      title?: string;
    }

    /**
     * Участник/публикатор сообщения
     */
    export interface Participant {
      /**
       * Данные участника/публикатора
       */
      data?: Participant.Data;

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

    export namespace Participant {
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
    export interface Publisher {
      /**
       * Данные участника/публикатора
       */
      data?: Publisher.Data;

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

    export namespace Publisher {
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

export interface CorporateActionListParams {
  /**
   * API-ключ.
   */
  key: string;

  /**
   * Дата публикации от
   */
  date_from?: string;

  /**
   * Дата публикации до
   */
  date_to?: string;

  /**
   * Группа типов: CapitalChange | RegisterAction | Shareholders | Other
   */
  group?: 'CapitalChange' | 'RegisterAction' | 'Shareholders' | 'Other';

  /**
   * ИНН организации или ИП. Должен быть указан, если не указан ОГРН/ОГРНИП.
   */
  inn?: string;

  /**
   * Количество сообщений на странице(максимум 1000).
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

  /**
   * Тип сообщения: FirmAuthorizedCapitalDecrease | FirmAuthorizedCapitalIncrease
   * |...
   */
  type?:
    | 'FirmAuthorizedCapitalDecrease'
    | 'FirmAuthorizedCapitalIncrease'
    | 'FirmSharesAcquisition'
    | 'FirmLiquidation'
    | 'FirmReorganization'
    | 'FirmRegisterExcludeTermination'
    | 'FirmAutonomousInstitutionCreation'
    | 'FirmCreated'
    | 'FirmRegisterExclude'
    | 'StopOfBusiness'
    | 'FirmAuthoritiesChange'
    | 'UnreliableInformation'
    | 'IntentionExerciseTheRightsOfShareholderNonResident'
    | 'SatisfactionExerciseTheRightsOfShareholderNonResident'
    | 'FirmMembersMeeting'
    | 'SaleOrLeaseEnterprise'
    | 'AnyOther'
    | 'RevocationOfPowerAttorney'
    | 'IntentionInheritanceOfLandProperty';
}

export declare namespace CorporateActions {
  export {
    type CorporateActionListResponse as CorporateActionListResponse,
    type CorporateActionListParams as CorporateActionListParams,
  };
}
