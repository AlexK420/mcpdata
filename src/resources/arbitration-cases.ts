// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ArbitrationCases extends APIResource {
  /**
   * Получить данные о судебных делах контрагента с возможностью фильтрации
   */
  list(query: ArbitrationCaseListParams, options?: RequestOptions): APIPromise<ArbitrationCaseListResponse> {
    return this._client.get('/v1/arbitrationCases', { query, ...options });
  }
}

export interface ArbitrationCaseListResponse {
  /**
   * Количество доступных запросов
   */
  available_count?: number;

  /**
   * Список судебных дел
   */
  data?: Array<ArbitrationCaseListResponse.Data>;

  /**
   * Исключительная ситуация
   */
  error?: ArbitrationCaseListResponse.Error;

  /**
   * Лимит
   */
  limit?: number;

  /**
   * Отступ
   */
  offset?: number;

  /**
   * Всего судебных дел
   */
  total_cases?: number;
}

export namespace ArbitrationCaseListResponse {
  /**
   * Судебное (арбитражное) дело
   */
  export interface Data {
    /**
     * Номер дела
     */
    id?: unknown;

    /**
     * Заявитель
     */
    applicants?: Array<Data.Applicant>;

    /**
     * Идентификатор дела в Картотеке арбитражных дел
     */
    case_id?: string;

    /**
     * Кредиторы
     */
    creditors?: Array<Data.Creditor>;

    /**
     * Кредиторы по текущим платежам
     */
    creditors_current_payments?: Array<Data.CreditorsCurrentPayment>;

    /**
     * Валюта. Допустимые значения: RUBLES, OTHER
     */
    currency?: 'RUBLES' | 'OTHER';

    /**
     * Дата открытия дела
     */
    date_start?: string;

    /**
     * Дата последнего обновления
     */
    date_update?: string;

    /**
     * Должники
     */
    debtors?: Array<Data.Debtor>;

    /**
     * Тип спора: 0 - Отсутствует 1 - Об установлении фактов, имеющих юридическое
     * значение 2 - Об административных правонарушениях 3 - Экономические споры по
     * гражданским правоотношениям 4 - О несостоятельности (банкротстве) организаций и
     * граждан 5 - Экономические споры по административным и иным публичным
     * правоотношениям (исключая споры об административных правонарушениях) 6 - О
     * признании и приведении в исполнение решений иностранных судов и иностранных
     * арбитражных решений 7 - Иное 8 - Административный спор 9 - Об оспаривании
     * решений трет. судов и о выдаче исп. листов на принудительное исполнение решений
     * трет. судов 10 - Дисциплинарные споры 11 - Экономические споры по
     * административным правоотношениям
     */
    dispute?: number;

    /**
     * Типы документов
     */
    document_types?: Array<string>;

    /**
     * Документы, привязанные к делу
     */
    documents?: Array<Data.Document>;

    /**
     * Номер дела
     */
    first_number?: string;

    /**
     * Количество инстанций
     */
    instance_count?: number;

    /**
     * Инстанции, через которые прошло дело
     */
    instances?: Array<string>;

    /**
     * Заинтересованные лица
     */
    interested_persons?: Array<Data.InterestedPerson>;

    /**
     * Ссылка на кад арбитр
     */
    kad_arbitr_link?: string;

    /**
     * Дата последнего документа по делу
     */
    last_document_date?: string;

    /**
     * Иная роль в деле
     */
    others?: Array<Data.Other>;

    /**
     * Истцы
     */
    plaintiffs?: Array<Data.Plaintiff>;

    /**
     * Ответчики
     */
    respondents?: Array<Data.Respondent>;

    /**
     * Статус дела: 0 - Дело рассматривается 1 - Дело завершено
     */
    status?: number;

    /**
     * Статус на основании последнего документа по делу
     */
    status_by_document?: number;

    /**
     * Цена иска
     */
    sum?: number;

    /**
     * Третье лицо
     */
    third_parties?: Array<Data.ThirdParty>;

    /**
     * Техническая дата последнего изменения
     */
    updated_at?: string;

    /**
     * Год дела
     */
    year?: number;

    /**
     * Месяц (с годом)
     */
    year_and_month?: number;
  }

  export namespace Data {
    /**
     * Иная роль в деле
     */
    export interface Applicant {
      /**
       * ИНН
       */
      inn?: string;

      /**
       * ИНН восстановлен из
       */
      inn_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Наименование
       */
      name?: string;

      /**
       * Наименование восстановлено из
       */
      name_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Нормализованное наименование
       */
      norm_name?: string;

      /**
       * ОГРН
       */
      ogrn?: string;

      /**
       * ОГРН восстановлен из
       */
      ogrn_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Тип (роль) в деле
       */
      role?: string;
    }

    /**
     * Иная роль в деле
     */
    export interface Creditor {
      /**
       * ИНН
       */
      inn?: string;

      /**
       * ИНН восстановлен из
       */
      inn_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Наименование
       */
      name?: string;

      /**
       * Наименование восстановлено из
       */
      name_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Нормализованное наименование
       */
      norm_name?: string;

      /**
       * ОГРН
       */
      ogrn?: string;

      /**
       * ОГРН восстановлен из
       */
      ogrn_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Тип (роль) в деле
       */
      role?: string;
    }

    /**
     * Иная роль в деле
     */
    export interface CreditorsCurrentPayment {
      /**
       * ИНН
       */
      inn?: string;

      /**
       * ИНН восстановлен из
       */
      inn_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Наименование
       */
      name?: string;

      /**
       * Наименование восстановлено из
       */
      name_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Нормализованное наименование
       */
      norm_name?: string;

      /**
       * ОГРН
       */
      ogrn?: string;

      /**
       * ОГРН восстановлен из
       */
      ogrn_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Тип (роль) в деле
       */
      role?: string;
    }

    /**
     * Иная роль в деле
     */
    export interface Debtor {
      /**
       * ИНН
       */
      inn?: string;

      /**
       * ИНН восстановлен из
       */
      inn_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Наименование
       */
      name?: string;

      /**
       * Наименование восстановлено из
       */
      name_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Нормализованное наименование
       */
      norm_name?: string;

      /**
       * ОГРН
       */
      ogrn?: string;

      /**
       * ОГРН восстановлен из
       */
      ogrn_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Тип (роль) в деле
       */
      role?: string;
    }

    /**
     * Документ
     */
    export interface Document {
      /**
       * Дата создания
       */
      creation_date?: string;

      /**
       * Тип документа
       */
      document_type?: string;

      /**
       * Идентификатор инстанции
       */
      instance_id?: string;

      /**
       * Название инстанции
       */
      instance_name?: string;

      /**
       * Номер инстанции
       */
      instance_num?: string;

      /**
       * Значение документа
       */
      value?: string;
    }

    /**
     * Иная роль в деле
     */
    export interface InterestedPerson {
      /**
       * ИНН
       */
      inn?: string;

      /**
       * ИНН восстановлен из
       */
      inn_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Наименование
       */
      name?: string;

      /**
       * Наименование восстановлено из
       */
      name_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Нормализованное наименование
       */
      norm_name?: string;

      /**
       * ОГРН
       */
      ogrn?: string;

      /**
       * ОГРН восстановлен из
       */
      ogrn_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Тип (роль) в деле
       */
      role?: string;
    }

    /**
     * Иная роль в деле
     */
    export interface Other {
      /**
       * ИНН
       */
      inn?: string;

      /**
       * ИНН восстановлен из
       */
      inn_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Наименование
       */
      name?: string;

      /**
       * Наименование восстановлено из
       */
      name_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Нормализованное наименование
       */
      norm_name?: string;

      /**
       * ОГРН
       */
      ogrn?: string;

      /**
       * ОГРН восстановлен из
       */
      ogrn_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Тип (роль) в деле
       */
      role?: string;
    }

    /**
     * Иная роль в деле
     */
    export interface Plaintiff {
      /**
       * ИНН
       */
      inn?: string;

      /**
       * ИНН восстановлен из
       */
      inn_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Наименование
       */
      name?: string;

      /**
       * Наименование восстановлено из
       */
      name_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Нормализованное наименование
       */
      norm_name?: string;

      /**
       * ОГРН
       */
      ogrn?: string;

      /**
       * ОГРН восстановлен из
       */
      ogrn_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Тип (роль) в деле
       */
      role?: string;
    }

    /**
     * Иная роль в деле
     */
    export interface Respondent {
      /**
       * ИНН
       */
      inn?: string;

      /**
       * ИНН восстановлен из
       */
      inn_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Наименование
       */
      name?: string;

      /**
       * Наименование восстановлено из
       */
      name_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Нормализованное наименование
       */
      norm_name?: string;

      /**
       * ОГРН
       */
      ogrn?: string;

      /**
       * ОГРН восстановлен из
       */
      ogrn_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Тип (роль) в деле
       */
      role?: string;
    }

    /**
     * Иная роль в деле
     */
    export interface ThirdParty {
      /**
       * ИНН
       */
      inn?: string;

      /**
       * ИНН восстановлен из
       */
      inn_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Наименование
       */
      name?: string;

      /**
       * Наименование восстановлено из
       */
      name_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Нормализованное наименование
       */
      norm_name?: string;

      /**
       * ОГРН
       */
      ogrn?: string;

      /**
       * ОГРН восстановлен из
       */
      ogrn_src?: 'OGRN' | 'INN' | 'NAME';

      /**
       * Тип (роль) в деле
       */
      role?: string;
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

export interface ArbitrationCaseListParams {
  /**
   * API-ключ.
   */
  key: string;

  /**
   * Роль компании
   *
   * **Возможные значения**:
   *
   * - `RESPONDENT` - Ответчик
   * - `PLAINTIFF` - Истец
   * - `THIRD_PARTY` - Третье лицо
   * - `INTERESTED_PERSONS` - Заинтересованное лицо
   * - `CREDITOR` - Кредитор
   * - `APPLICANT` - Заявитель
   * - `OTHER` - Иное лицо
   * - `ALL` - Все
   */
  company_role?:
    | 'RESPONDENT'
    | 'PLAINTIFF'
    | 'THIRD_PARTY'
    | 'INTERESTED_PERSONS'
    | 'CREDITOR'
    | 'APPLICANT'
    | 'DEBTOR'
    | 'CREDITOR_CURRENT_PAYMENTS'
    | 'OTHER'
    | 'ALL';

  /**
   * Арбитражный спор
   *
   * **Возможные значения**:
   *
   * - `ABSENT` - отсутствует(0)
   * - `HAS_LEGAL_SIGNIFICANCE` - об установлении фактов, имеющих юридическое
   *   значение(1)
   * - `ADMINISTRATIVE_OFFENCES` - об административных правонарушениях(2)
   * - `CIVIL_LAW_DISPUTES` - экономические споры по гражданским правоотношениям(3)
   * - `BANKRUPTCY_ORGANIZATIONS_AND_CITIZENS` - о несостоятельности (банкротстве)
   *   организаций и граждан(4)
   * - `ECONOMIC_DISPUTES_ON_PUBLIC_LEGAL_RELATIONS` - (экономические споры по
   *   административным и иным публичным правоотношениям (исключая споры об
   *   административных правонарушениях)(5)
   * - `ENFORCMENT_OF_FOREIGN_JUDGMENTS` - о признании и приведении в исполнение
   *   решений иностранных судов и иностранных арбитражных решений(6)
   * - `OTHER` - иное(7)
   * - `ADMINISTRATIVE_DISPUTE` - административный спор(8)
   * - `CHALLENGING_COURT_DECISIONS` - об оспаривании решений трет. судов и о выдаче
   *   исп. листов на принудительное исполнение решений трет. судов(9)
   * - `DISCIPLINARY_DISPUTES` - дисциплинарные споры(10)
   * - `ECONOMIC_DISPUTES` - экономические споры по административным
   *   правоотношениям(11)
   */
  dispute?:
    | 'ABSENT'
    | 'HAS_LEGAL_SIGNIFICANCE'
    | 'ADMINISTRATIVE_OFFENCES'
    | 'CIVIL_LAW_DISPUTES'
    | 'BANKRUPTCY_ORGANIZATIONS_AND_CITIZENS'
    | 'ECONOMIC_DISPUTES_ON_PUBLIC_LEGAL_RELATIONS'
    | 'ENFORCMENT_OF_FOREIGN_JUDGMENTS'
    | 'OTHER'
    | 'ADMINISTRATIVE_DISPUTE'
    | 'CHALLENGING_COURT_DECISIONS'
    | 'DISCIPLINARY_DISPUTES'
    | 'ECONOMIC_DISPUTES';

  /**
   * Дата окончания дела.
   */
  end_date?: string;

  /**
   * ИНН организации или ИП. Должен быть указан, если не указан ОГРН/ОГРНИП.
   */
  inn?: string;

  /**
   * Количество сообщений на странице(максимум 1000).
   */
  limit?: number;

  /**
   * Возвращать список документов вынесенных судом или поданных сторонами.
   */
  need_document?: boolean;

  /**
   * Отступ страницы
   */
  offset?: number;

  /**
   * ОГРН или ОГРНИП. Должен быть указан, если не указан ИНН.
   */
  ogrn?: string;

  /**
   * Дата начала дела.
   */
  start_date?: string;

  /**
   * Статус дела
   *
   * **Возможные значения**:
   *
   * - `OPEN` - Дело рассматривается(0)
   * - `CLOSE` - Дело завершено(1)
   */
  status?: 'CLOSE' | 'OPEN';

  /**
   * Дата изменения с
   */
  updated_at_from?: string;

  /**
   * Год дела.
   */
  year?: string;
}

export declare namespace ArbitrationCases {
  export {
    type ArbitrationCaseListResponse as ArbitrationCaseListResponse,
    type ArbitrationCaseListParams as ArbitrationCaseListParams,
  };
}
