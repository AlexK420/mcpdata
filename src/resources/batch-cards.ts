// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as FinanceAPI from './finance';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class BatchCards extends APIResource {
  /**
   * Получить информацию о нескольких организациях одним запросом (до 5 000
   * контрагентов в запросе), отправив список ИНН/ОГРН
   */
  create(params: BatchCardCreateParams, options?: RequestOptions): APIPromise<BatchCardCreateResponse> {
    const { key, ...body } = params;
    return this._client.post('/v1/batchCards', { query: { key }, body, ...options });
  }
}

/**
 * Информация о запрашиваемых контрагентах
 */
export interface BatchCardCreateResponse {
  /**
   * Количество контрагентов, доступных пользователю для получения в результате
   * запроса
   */
  available_count?: number;

  /**
   * Информация о запрашиваемых контрагентах
   */
  data?: Array<BatchCardCreateResponse.Data>;

  /**
   * Лимит, указанный в запросе
   */
  limit?: number;

  /**
   * Оффсет, указанный в запросе
   */
  offset?: number;

  /**
   * Флаг короткой выгрузки
   */
  short_upload?: boolean;

  /**
   * Количество контрагентов, найденных в результате запроса
   */
  total?: number;
}

export namespace BatchCardCreateResponse {
  /**
   * Информация о контрагенте
   */
  export interface Data {
    /**
     * Информация об адресе
     */
    address_block?: Data.AddressBlock;

    /**
     * Контакты
     */
    contacts_block?: Data.ContactsBlock;

    /**
     * экономические показатели
     */
    finance_block?: Data.FinanceBlock;

    /**
     * Экономические показатели
     */
    finance_plain_block?: Data.FinancePlainBlock;

    /**
     * Блок с информацией о группах (холдинги)
     */
    groups_block?: Data.GroupsBlock;

    /**
     * Информация об интеллектуальной собственности
     */
    intellectual_property_block?: Data.IntellectualPropertyBlock;

    /**
     * Блок с информацией об аккредитации ИТ компании
     */
    it_company_block?: Data.ItCompanyBlock;

    /**
     * Блок дополнительных признаков, описывающих деятельность компании
     */
    labels_block?: Data.LabelsBlock;

    /**
     * Блок с основной информацией
     */
    main_block?: Data.MainBlock;

    /**
     * Блок с информацией о руководителе
     */
    managers_block?: Data.ManagersBlock;

    /**
     * Информация из реестра МСП
     */
    msp_block?: Data.MspBlock;

    /**
     * информация об участниках
     */
    owners_block?: Data.OwnersBlock;

    /**
     * Блок с информацией из сертификатов и деклараций
     */
    products_block?: Data.ProductsBlock;

    /**
     * Негативные списки
     */
    risks_block?: Data.RisksBlock;

    /**
     * Блок с информацией о численности сотрудников в компании по годам
     */
    workers_count_block?: { [key: string]: number };
  }

  export namespace Data {
    /**
     * Информация об адресе
     */
    export interface AddressBlock {
      /**
       * Город и населенный пункт
       */
      city_and_np_name?: string;

      /**
       * Дата отметки о недостоверности адреса
       */
      false_info_date?: string;

      /**
       * Информация о том, что адрес недостоверный
       */
      false_info_text?: string;

      /**
       * Код ФИАС
       */
      fias_id?: string;

      /**
       * Почтовый индекс
       */
      postal_code?: string;

      /**
       * Район
       */
      rayon?: string;

      /**
       * Регион
       */
      region?: string;

      /**
       * Код региона
       */
      region_code?: string;

      /**
       * Часть адреса: улица и далее
       */
      street_address?: string;

      /**
       * Полный адрес
       */
      value?: string;
    }

    /**
     * Контакты
     */
    export interface ContactsBlock {
      emails?: Array<ContactsBlock.Email>;

      phones?: Array<ContactsBlock.Phone>;

      websites?: Array<ContactsBlock.Website>;
    }

    export namespace ContactsBlock {
      /**
       * Контактные данные
       */
      export interface Email {
        /**
         * Нормализованный тип контакта
         */
        clean_contact_type?: 'email' | 'website' | 'phone' | 'address';

        /**
         * Значение контакта
         */
        value?: string;
      }

      /**
       * Контактные данные
       */
      export interface Phone {
        /**
         * Нормализованный тип контакта
         */
        clean_contact_type?: 'email' | 'website' | 'phone' | 'address';

        /**
         * Значение контакта
         */
        value?: string;
      }

      /**
       * Контактные данные
       */
      export interface Website {
        /**
         * Нормализованный тип контакта
         */
        clean_contact_type?: 'email' | 'website' | 'phone' | 'address';

        /**
         * Значение контакта
         */
        value?: string;
      }
    }

    /**
     * экономические показатели
     */
    export interface FinanceBlock {
      /**
       * Количество доступных запросов
       */
      available_count?: number;

      /**
       * данные бух отчетов
       */
      balances?: FinanceBlock.Balances;

      /**
       * Данные отчетов о финансовых результатах
       */
      fin_results?: FinanceBlock.FinResults;

      /**
       * данные отчетов о движении денежных средств
       */
      money_flow?: FinanceBlock.MoneyFlow;
    }

    export namespace FinanceBlock {
      /**
       * данные бух отчетов
       */
      export interface Balances {
        /**
         * Данные финансового показателя в разрезе лет
         */
        assets?: Balances.Assets;

        /**
         * Показатели
         */
        indicators?: Array<Balances.Indicator>;

        /**
         * Данные финансового показателя в разрезе лет
         */
        liabilities?: Balances.Liabilities;

        /**
         * ОКУД
         */
        okud?: string;

        /**
         * Годы, за которые организация подавала отчетность. Как правило, отчетность за год
         * включает показатели за два или три года: текущий (отчетный), предыдущий и
         * предшествующий предыдущему. Таким образом, возможна ситуация: компания подает
         * отчетность за один год, с показателями за три года
         */
        years?: Array<number>;
      }

      export namespace Balances {
        /**
         * Данные финансового показателя в разрезе лет
         */
        export interface Assets {
          childrenMap?: { [key: string]: FinanceAPI.FinanceReportRow };

          /**
           * Код показателя
           */
          code?: string;

          indicators?: Array<FinanceAPI.FinanceReportRow>;

          /**
           * Название показателя
           */
          name?: string;

          row_num?: number;

          /**
           * Все значения показателя по годам
           */
          sum?: { [key: string]: number };
        }

        /**
         * Данные финансового показателя в разрезе лет
         */
        export interface Indicator {
          childrenMap?: { [key: string]: FinanceAPI.FinanceReportRow };

          /**
           * Код показателя
           */
          code?: string;

          indicators?: Array<FinanceAPI.FinanceReportRow>;

          /**
           * Название показателя
           */
          name?: string;

          row_num?: number;

          /**
           * Все значения показателя по годам
           */
          sum?: { [key: string]: number };
        }

        /**
         * Данные финансового показателя в разрезе лет
         */
        export interface Liabilities {
          childrenMap?: { [key: string]: FinanceAPI.FinanceReportRow };

          /**
           * Код показателя
           */
          code?: string;

          indicators?: Array<FinanceAPI.FinanceReportRow>;

          /**
           * Название показателя
           */
          name?: string;

          row_num?: number;

          /**
           * Все значения показателя по годам
           */
          sum?: { [key: string]: number };
        }
      }

      /**
       * Данные отчетов о финансовых результатах
       */
      export interface FinResults {
        /**
         * Показатели
         */
        indicators?: Array<FinResults.Indicator>;

        /**
         * ОКУД
         */
        okud?: string;

        /**
         * Годы, за которые организация подавала отчетность. Как правило, отчетность за год
         * включает показатели за два или три года: текущий (отчетный), предыдущий и
         * предшествующий предыдущему. Таким образом, возможна ситуация: компания подает
         * отчетность за один год, с показателями за три года
         */
        years?: Array<number>;
      }

      export namespace FinResults {
        /**
         * Данные финансового показателя в разрезе лет
         */
        export interface Indicator {
          childrenMap?: { [key: string]: FinanceAPI.FinanceReportRow };

          /**
           * Код показателя
           */
          code?: string;

          indicators?: Array<FinanceAPI.FinanceReportRow>;

          /**
           * Название показателя
           */
          name?: string;

          row_num?: number;

          /**
           * Все значения показателя по годам
           */
          sum?: { [key: string]: number };
        }
      }

      /**
       * данные отчетов о движении денежных средств
       */
      export interface MoneyFlow {
        /**
         * Показатели
         */
        indicators?: Array<MoneyFlow.Indicator>;

        /**
         * ОКУД
         */
        okud?: string;

        /**
         * Годы, за которые организация подавала отчетность. Как правило, отчетность за год
         * включает показатели за два или три года: текущий (отчетный), предыдущий и
         * предшествующий предыдущему. Таким образом, возможна ситуация: компания подает
         * отчетность за один год, с показателями за три года
         */
        years?: Array<number>;
      }

      export namespace MoneyFlow {
        /**
         * Данные финансового показателя в разрезе лет
         */
        export interface Indicator {
          childrenMap?: { [key: string]: FinanceAPI.FinanceReportRow };

          /**
           * Код показателя
           */
          code?: string;

          indicators?: Array<FinanceAPI.FinanceReportRow>;

          /**
           * Название показателя
           */
          name?: string;

          row_num?: number;

          /**
           * Все значения показателя по годам
           */
          sum?: { [key: string]: number };
        }
      }
    }

    /**
     * Экономические показатели
     */
    export interface FinancePlainBlock {
      fin_data?: Array<FinancePlainBlock.FinData>;

      tax_mode?: FinancePlainBlock.TaxMode;
    }

    export namespace FinancePlainBlock {
      /**
       * Экономические показатели
       */
      export interface FinData {
        code?: string;

        /**
         * Суммы по годам: ключ - год, значение - сумма или маска ░
         */
        sum_by_year_map?: { [key: string]: number | string };
      }

      export interface TaxMode {
        /**
         * признак АУСН
         */
        ausn_sign?: boolean;

        /**
         * признак общего налогооблажения
         */
        common_mode?: boolean;

        /**
         * признак ЕНВД
         */
        envd_sign?: boolean;

        /**
         * признак ЕСХН
         */
        eshn_sign?: boolean;

        /**
         * признак НПД
         */
        npd_sign?: boolean;

        /**
         * признак ПСН
         */
        psn_sign?: boolean;

        /**
         * Дата публикации информации о налоговом режиме
         */
        publication_date?: string;

        /**
         * признак СРП
         */
        srp_sign?: boolean;

        /**
         * признак УСН
         */
        usn_sign?: boolean;
      }
    }

    /**
     * Блок с информацией о группах (холдинги)
     */
    export interface GroupsBlock {
      holding?: GroupsBlock.Holding;

      holding_by_active?: GroupsBlock.HoldingByActive;

      metagroup?: GroupsBlock.Metagroup;

      metagroup_by_active?: GroupsBlock.MetagroupByActive;

      network?: GroupsBlock.Network;

      network_by_active?: GroupsBlock.NetworkByActive;
    }

    export namespace GroupsBlock {
      export interface Holding {
        ogrn?: string;

        share?: number;

        size?: number;
      }

      export interface HoldingByActive {
        ogrn?: string;

        share?: number;

        size?: number;
      }

      export interface Metagroup {
        ogrn?: string;

        share?: number;

        size?: number;
      }

      export interface MetagroupByActive {
        ogrn?: string;

        share?: number;

        size?: number;
      }

      export interface Network {
        ogrn?: string;

        share?: number;

        size?: number;
      }

      export interface NetworkByActive {
        ogrn?: string;

        share?: number;

        size?: number;
      }
    }

    /**
     * Информация об интеллектуальной собственности
     */
    export interface IntellectualPropertyBlock {
      /**
       * Информация о наличии у компании ПО, зарегистрированного в реестре компьютерных
       * программ Роспатента
       */
      rospatent_computer_programs_block?: IntellectualPropertyBlock.RospatentComputerProgramsBlock;

      /**
       * Информация о наличии у компании ПО в реестре отечественного ПО Минцифры
       */
      ru_soft_block?: IntellectualPropertyBlock.RuSoftBlock;

      /**
       * Информация о наличии у компании зарегистрированных в Роспатенте торговых знаков
       */
      trade_marks_block?: IntellectualPropertyBlock.TradeMarksBlock;
    }

    export namespace IntellectualPropertyBlock {
      /**
       * Информация о наличии у компании ПО, зарегистрированного в реестре компьютерных
       * программ Роспатента
       */
      export interface RospatentComputerProgramsBlock {
        /**
         * Дата актуальности данных
         */
        actuality_date?: string;

        /**
         * Список ПО компании в реестре ПО Роспатента
         */
        computer_program_records?: Array<RospatentComputerProgramsBlock.ComputerProgramRecord>;

        /**
         * Количество ПО в реестре Роспатента
         */
        computer_programs_count?: number;
      }

      export namespace RospatentComputerProgramsBlock {
        /**
         * Реестр компьютерных программ Роспатента
         */
        export interface ComputerProgramRecord {
          /**
           * Признак действия правовой охраны
           */
          actual?: boolean;

          /**
           * Дата подачи заявки на государственную регистрацию
           */
          app_date?: string;

          /**
           * Номер заявки на государственную регистрацию
           */
          app_number?: number;

          /**
           * Сведения об авторах
           */
          authors?: string;

          /**
           * Количество авторов (включая отказавшихся быть упомянутыми)
           */
          authors_count?: number;

          /**
           * Контактные реквизиты для предоставления третьим лицам
           */
          contact_to_third_parties?: string;

          /**
           * Год создания
           */
          creation_year?: number;

          /**
           * Название программы для ЭВМ
           */
          program_name?: string;

          /**
           * URL публикации в открытых реестрах сайта ФИПС
           */
          publication_url?: string;

          /**
           * Дата государственной регистрации
           */
          reg_date?: string;

          /**
           * Номер государственной регистрации
           */
          reg_number?: string;

          /**
           * Дата публикации сведений о регистрации
           */
          registration_publish_date?: string;

          /**
           * Номер бюллетеня публикации сведений о регистрации
           */
          registration_publish_number?: number;

          /**
           * Сведения о правообладателе(ях)
           */
          right_holders?: string;
        }
      }

      /**
       * Информация о наличии у компании ПО в реестре отечественного ПО Минцифры
       */
      export interface RuSoftBlock {
        /**
         * Дата актуальности данных
         */
        actuality_date?: string;

        /**
         * Количество ПО в реестре Минцифры
         */
        ru_soft_count?: number;

        /**
         * Список ПО компании в реестре отечественного ПО Минцифры
         */
        ru_soft_list?: Array<RuSoftBlock.RuSoftList>;
      }

      export namespace RuSoftBlock {
        /**
         * Информация из реестра отечественного ПО Минцифры
         */
        export interface RuSoftList {
          /**
           * Альтернативные названия ПО
           */
          alternative_names?: Array<string>;

          /**
           * Код продукции
           */
          category?: RuSoftList.Category;

          /**
           * Описание ПО
           */
          description?: string;

          /**
           * Функциональные характеристики
           */
          functional_characteristics?: string;

          /**
           * Ссылка на сайт правообладателя с информацией о стоимости ПО
           */
          link_to_cost?: string;

          /**
           * Ссылка на решения уполномоченного органа о включении сведений о ПО в реестр
           */
          link_to_decision?: string;

          /**
           * Ссылка на страницу сайта Минцифры
           */
          link_to_gov?: string;

          /**
           * Сайт с документацией по установке и эксплуатации
           */
          link_to_vendor?: string;

          /**
           * Наименование ПО
           */
          program_name?: string;

          /**
           * Дата решения уполномоченного органа о включении сведений о ПО в реестр
           */
          reg_date?: string;

          /**
           * Регистрационный номер
           */
          reg_number?: string;

          /**
           * Код продукции
           */
          soft_class?: RuSoftList.SoftClass;
        }

        export namespace RuSoftList {
          /**
           * Код продукции
           */
          export interface Category {
            /**
             * Дополнительные элементы
             */
            add?: Array<string>;

            /**
             * Основной элемент
             */
            main?: string;
          }

          /**
           * Код продукции
           */
          export interface SoftClass {
            /**
             * Дополнительные элементы
             */
            add?: Array<string>;

            /**
             * Основной элемент
             */
            main?: string;
          }
        }
      }

      /**
       * Информация о наличии у компании зарегистрированных в Роспатенте торговых знаков
       */
      export interface TradeMarksBlock {
        /**
         * Дата актуальности данных
         */
        actuality_date?: string;

        /**
         * Количество торговых знаков зарегистрированных в Роспатента
         */
        trade_marks_count?: number;

        /**
         * Список торговых знаков реестре ПО Роспатента
         */
        trade_marks_records?: Array<TradeMarksBlock.TradeMarksRecord>;
      }

      export namespace TradeMarksBlock {
        /**
         * Информация о Торговой Марке/Торговом Знаке
         */
        export interface TradeMarksRecord {
          /**
           * Признак действия правовой охраны
           */
          actual?: boolean;

          /**
           * Дата подачи заявки на государственную регистрацию
           */
          app_date?: string;

          /**
           * Номер заявки на государственную регистрацию
           */
          app_number?: string;

          /**
           * Указание на то, что товарный знак является коллективным
           */
          collective?: boolean;

          /**
           * Сведения о лицах, имеющих право использования коллективного знака
           */
          collective_users?: string;

          /**
           * Адрес для переписки
           */
          correspondence_address?: string;

          /**
           * Дата государственной регистрации отчуждения исключительного права по договору,
           * на основании которого выдано свидетельство
           */
          exclusive_rights_transfer_agreement_reg_date?: string;

          /**
           * Номер государственной регистрации отчуждения исключительного права по договору,
           * на основании которого выдано свидетельство
           */
          exclusive_rights_transfer_agreement_reg_number?: string;

          /**
           * Дата истечения срока действия исключительного права
           */
          expiration_date?: string;

          /**
           * Наименование или ФИО правообладателя на иностранном языке
           */
          foreign_right_holder_name?: string;

          /**
           * Номера и даты юридически связанных заявок
           */
          legally_related_apps?: string;

          /**
           * Номера и даты юридически связанных регистраций
           */
          legally_related_regs?: string;

          /**
           * превью изображения торговой марки
           */
          preview_image_link?: string;

          /**
           * Дата приоритета
           */
          priority_date?: string;

          /**
           * URL публикации в открытых реестрах сайта ФИПС
           */
          publication_url?: string;

          /**
           * Дата государственной регистрации
           */
          reg_date?: string;

          /**
           * Номер государственной регистрации
           */
          reg_number?: string;

          /**
           * Адрес правообладателя
           */
          right_holder_address?: string;

          /**
           * Код страны правообладателя
           */
          right_holder_country_code?: string;

          /**
           * ИНН правообладателя
           */
          right_holder_inn?: string;

          /**
           * Наименование или ФИО правообладателя
           */
          right_holder_name?: string;

          /**
           * ОГРН или ОГРНИП правообладателя
           */
          right_holder_ogrn?: string;
        }
      }
    }

    /**
     * Блок с информацией об аккредитации ИТ компании
     */
    export interface ItCompanyBlock {
      /**
       * Статус
       */
      accreditation_status?: string;

      /**
       * Номер приказа
       */
      decree_num?: string;

      /**
       * Сведения об изменениях
       */
      details?: string;

      /**
       * Дата регистрации
       */
      reg_date?: string;

      /**
       * Номер государственной регистрации
       */
      reg_num?: string;

      /**
       * Дата обновления информации
       */
      update_date?: string;
    }

    /**
     * Блок дополнительных признаков, описывающих деятельность компании
     */
    export interface LabelsBlock {
      /**
       * Количество изобретений
       */
      inventions_count?: string;

      /**
       * Член НОПРИЗ. Возвращается true или false.
       */
      nopriz_member?: boolean | string;

      /**
       * Член НОСТРОЙ. Возвращается true или false.
       */
      nostroy_member?: boolean | string;

      /**
       * Является сертифицированным партнером 1С-Bitrix. Возвращается true или false.
       */
      one_cbitrix_partner?: boolean | string;

      /**
       * Является сертифицированным партнером 1С. Возвращается true или false.
       */
      one_cpartner?: boolean | string;

      /**
       * Количество действующих программ для ЭВМ в реестре ПО Роспатента
       */
      rospatent_count?: string;

      /**
       * Количество действующих программ для ЭВМ в реестре отечественного ПО Минцифры
       */
      rusoft_count?: string;

      /**
       * Количество действующих товарных знаков
       */
      trade_marks_count?: string;
    }

    /**
     * Блок с основной информацией
     */
    export interface MainBlock {
      /**
       * Основной ОКВЭД
       */
      activity_kind?: string;

      /**
       * Основной ОКВЭД - расшифровка
       */
      activity_kind_dsc?: string;

      /**
       * Категория
       */
      category?: string;

      /**
       * Уставный капитал
       */
      chapter_capital?: string;

      /**
       * Код ОПФ
       */
      code_opf?: string;

      /**
       * Дата регистрации
       */
      establishment_date?: string;

      /**
       * Полное наименование
       */
      full_name?: string;

      /**
       * Полное наименование ОПФ
       */
      full_opf?: string;

      /**
       * Пол (для ИП - 1 (мужской), 2 (женский), для ЮЛ - 0
       */
      gender?: number;

      /**
       * ИНН
       */
      inn?: string;

      /**
       * КПП
       */
      kpp?: string;

      /**
       * Название
       */
      name?: string;

      /**
       * ОГРН
       */
      ogrn?: string;

      /**
       * Оквэд-ы контрагента
       */
      okveds?: Array<string>;

      /**
       * Статус
       */
      status?: MainBlock.Status;

      /**
       * Тип субъекта
       */
      type?: string;

      /**
       * Количество лет после регистрации
       */
      years_from_registration?: number;
    }

    export namespace MainBlock {
      /**
       * Статус
       */
      export interface Status {
        /**
         * Признак активности (активна - 0 /не активна - 1)
         */
        active_status?: number;

        /**
         * Код ЕГР
         */
        code_egr?: string;

        /**
         * Цвет для UI
         */
        color?: string;

        /**
         * Дата прекращения действия компании
         */
        date_end?: string;

        /**
         * Текст статуса ЕГР
         */
        status_egr?: string;

        /**
         * Краткий статус на английском
         */
        status_eng_short?: string;

        /**
         * Краткий статус на русском
         */
        status_rus_short?: string;

        /**
         * Дата обновления статуса
         */
        status_update_date?: string;

        year_when_company_change_to_terminal_status?: number;

        year_when_company_closed?: number;
      }
    }

    /**
     * Блок с информацией о руководителе
     */
    export interface ManagersBlock {
      /**
       * список руководителей
       */
      managers?: Array<ManagersBlock.Manager>;
    }

    export namespace ManagersBlock {
      /**
       * информация о руководителях
       */
      export interface Manager {
        /**
         * Дата вступления в должность
         */
        date?: string;

        /**
         * Пол: 1 - мужской, 2 - женский, 0 или 3 - определить не удалось
         */
        gender?: string;

        /**
         * ИНН руководителя
         */
        inn?: string;

        /**
         * Имя руководителя
         */
        name?: string;

        /**
         * Должность руководителя
         */
        position?: string;
      }
    }

    /**
     * Информация из реестра МСП
     */
    export interface MspBlock {
      /**
       * Количество заключенных договоров по ФЗ 44 и ФЗ 332.
       */
      contracts_count?: number;

      /**
       * Есть лицензии. Возвращается true или false.
       */
      has_licenses?: boolean | string;

      /**
       * Производство инновационной, высокотехнологичной продукции. Возвращается true или
       * false.
       */
      is_innovative?: boolean | string;

      /**
       * Участие в программах партнерства. Возвращается true или false.
       */
      is_partner?: boolean | string;

      /**
       * Является социальным предприятием. Возвращается true или false.
       */
      is_social?: boolean | string;

      /**
       * Количество лицензий
       */
      licenses_count?: number;

      /**
       * Входит в реестр МСП (в реестре/не реестре).
       */
      msp?: string;

      /**
       * Дата включения в МСП.
       */
      msp_in_date?: string;

      /**
       * Дата исключение из МСП.
       */
      msp_out_date?: string;

      /**
       * Вновь созданный. Возвращается true или false.
       */
      renew?: boolean | string;

      /**
       * Среднесписочная численность работников за предшествующий календарный год.
       */
      sschr?: string;
    }

    /**
     * информация об участниках
     */
    export interface OwnersBlock {
      /**
       * список участников
       */
      owners?: Array<OwnersBlock.Owner>;
    }

    export namespace OwnersBlock {
      /**
       * Информация об участниках
       */
      export interface Owner {
        /**
         * Размер доли уставного капитала
         */
        captable_size?: number;

        /**
         * признак недостоверных сведений
         */
        false_info?: boolean;

        /**
         * признак ограничения доступа к информации
         */
        information_limited?: boolean;

        /**
         * ИНН
         */
        inn?: string;

        /**
         * Название / имя
         */
        name?: string;

        /**
         * ОГРН
         */
        ogrn?: string;

        /**
         * Доля в уставном капитале
         */
        share?: string;

        /**
         * Тип владельца
         */
        type?: 'FL' | 'UL_ROS' | 'UL_FOREIGN' | 'GOV' | 'PIF' | 'INVEST' | 'OOO';
      }
    }

    /**
     * Блок с информацией из сертификатов и деклараций
     */
    export interface ProductsBlock {
      /**
       * Список сертификатов
       */
      certifications?: Array<ProductsBlock.Certification>;

      /**
       * Список деклараций
       */
      declarations?: Array<ProductsBlock.Declaration>;
    }

    export namespace ProductsBlock {
      /**
       * Сведения о сертификате
       */
      export interface Certification {
        /**
         * Полное наименование заявителя
         */
        applicant_name?: string;

        /**
         * Тип заявителя
         */
        applicant_type?: string;

        /**
         * Дата регистрации сертификата
         */
        begin_date?: string;

        /**
         * Идентификатор сертификата
         */
        cert_id?: string;

        /**
         * Тип объекта сертификации
         */
        cert_product_object_type?: string;

        /**
         * Статус сертификата
         */
        cert_status?:
          | 'Архивный'
          | 'Возобновлён'
          | 'Действует'
          | 'Недействителен'
          | 'Прекращён'
          | 'Приостановлен'
          | 'Продлен';

        /**
         * Тип сертификата
         */
        cert_type?: string;

        /**
         * Дата окончания действия сертификата
         */
        end_date?: string;

        /**
         * Полное наименование изготовителя
         */
        manufacter_name?: string;

        /**
         * Тип изготовителя
         */
        manufacter_type?: string;

        /**
         * Группа продукции
         */
        product_group?: string;

        /**
         * Информация по продукции
         */
        product_info?: string;

        /**
         * Общее наименование продукции
         */
        product_name?: string;

        /**
         * Технические регламенты
         */
        product_tech_reg?: string;

        /**
         * Регистрационный номер сертификата
         */
        reg_number?: string;
      }

      /**
       * Сведения о декларации
       */
      export interface Declaration {
        /**
         * Тип заявителя
         */
        applicant_type?: string;

        /**
         * Дата начала действия
         */
        begin_date?: string;

        /**
         * Статус декларации
         */
        decl_status?:
          | 'Архивный'
          | 'Возобновлён'
          | 'Выдано предписание'
          | 'Действует'
          | 'Направлено уведомление о прекращении'
          | 'Недействителен'
          | 'Прекращён'
          | 'Приостановлен'
          | 'Черновик'
          | 'Ожидает проверки оператора реестра';

        /**
         * Тип декларации
         */
        decl_type?: string;

        /**
         * Дата окончания действия
         */
        end_date?: string;

        /**
         * Идентификатор
         */
        id_decl?: string;

        /**
         * Полное наименование изготовителя
         */
        manufacter_name?: string;

        /**
         * Вид изготовителя
         */
        manufacter_type?: string;

        /**
         * Информация по продукции
         */
        product_info?: string;

        /**
         * Наименование продукции
         */
        product_name?: string;

        /**
         * Тип объекта декларирования
         */
        product_object_type_decl?: string;

        /**
         * Технический регламент
         */
        product_tech_reg?: string;

        /**
         * Рег номер
         */
        reg_number?: string;
      }
    }

    /**
     * Негативные списки
     */
    export interface RisksBlock {
      /**
       * Недостоверные данные об адресе по ЕГРЮЛ. Возвращается true или false.
       */
      address_false_info?: boolean | string;

      /**
       * Информация о дисквалифицированных лицах.
       */
      disqualified_details?: Array<RisksBlock.DisqualifiedDetail>;

      /**
       * ИП дисквалифицирован. Возвращается true или false.
       */
      disqualified_individual?: boolean | string;

      /**
       * Руководитель дисквалифицирован. Возвращается true или false.
       */
      disqualified_managers?: boolean | string;

      /**
       * Участник дисквалифицирован. Возвращается true или false.
       */
      disqualified_owners?: boolean | string;

      /**
       * Недостоверные данные по ЕГРЮЛ. В ЕГР есть отметка о недостоверности любого из
       * блоков: адрес, участник, руководитель, управляющая компания. Возвращается true
       * или false.
       */
      false_info?: boolean | string;

      /**
       * Находится в реестре ЮЛ, привлеченных за незаконное вознаграждение. Возвращается
       * true или false.
       */
      illegal_rewards?: boolean | string;

      /**
       * Детализация по ЮЛ, привлеченным за незаконное вознаграждение.
       */
      illegal_rewards_details?: Array<RisksBlock.IllegalRewardsDetail>;

      /**
       * Находится в санкционном списке EU. Возвращается true или false.
       */
      in_sanctions_eu?: boolean | string;

      /**
       * Состоит в санкционных списках
       */
      in_sanctions_list?: boolean;

      /**
       * Находится в санкционном списке OFAC. Возвращается true или false.
       */
      in_sanctions_ofac?: boolean | string;

      /**
       * Находится в санкционном списке RF. Возвращается true или false.
       */
      in_sanctions_rf?: boolean | string;

      /**
       * Находится в санкционном списке UK. Возвращается true или false.
       */
      in_sanctions_uk?: boolean | string;

      /**
       * Ограничение доступа к сведениям. Возвращается true или false.
       */
      information_limited?: boolean | string;

      /**
       * Недостоверные данные об управляющей компании по ЕГРЮЛ. Возвращается true или
       * false.
       */
      management_companies_false_info?: boolean | string;

      /**
       * Ограничение доступа к сведениям об управляющей компании. Возвращается true или
       * false.
       */
      management_companies_information_limited?: boolean | string;

      /**
       * Недостоверные данные о руководителе. Возвращается true или false.
       */
      managers_false_info?: boolean | string;

      /**
       * Ограничение доступа к сведениям о руководителе. Возвращается true или false.
       */
      managers_information_limited?: boolean | string;

      /**
       * Недостоверные данные об участнике по ЕГРЮЛ. Возвращается true или false.
       */
      owner_false_info?: boolean | string;

      /**
       * Ограничение доступа к сведениям об участнике. Возвращается true или false.
       */
      owners_information_limited?: boolean | string;

      /**
       * > 50% доля владения, принадлежащая санкционному лицу Возвращается true или
       * > false.
       */
      sanctions_rule_fifty?: boolean | string;

      /**
       * Руководитель в РНП. Возвращается true или false.
       */
      unscrupulous_manager?: boolean | string;

      /**
       * Участник в РНП. Возвращается true или false.
       */
      unscrupulous_owner?: boolean | string;

      /**
       * Содержится в реестре недобросовестных поставщиков по ФЗ 223. Возвращается true
       * или false.
       */
      unscrupulous_supplier223?: boolean | string;

      /**
       * Содержится в реестре недобросовестных поставщиков по ФЗ 44. Возвращается true
       * или false.
       */
      unscrupulous_supplier44?: boolean | string;

      /**
       * Содержится в реестре недобросовестных поставщиков по ПП 615. Возвращается true
       * или false.
       */
      unscrupulous_supplier615?: boolean | string;

      /**
       * Детализация по РНП в разрезе 44, 223, 615.
       */
      unscrupulous_suppliers_details?: { [key: string]: Array<RisksBlock.UnscrupulousSuppliersDetail> };
    }

    export namespace RisksBlock {
      /**
       * Информация о дисквалифицированных лицах.
       */
      export interface DisqualifiedDetail {
        birth_date?: string;

        birth_place?: string;

        company_ogrn?: string;

        disqualification_expiry_date?: string;

        disqualification_period?: string;

        disqualification_start_date?: string;

        full_name?: string;

        judge_full_name?: string;

        judge_position?: string;

        koap_article?: string;

        offence_org_name?: string;

        org_inn?: string;

        post?: string;

        protocol_made_org_name?: string;

        register_number?: string;
      }

      /**
       * Данные о ЮЛ или ИП внесенном в реестр неблагонадежных поставщиков (РНП)
       */
      export interface IllegalRewardsDetail {
        /**
         * Номер дела
         */
        case_number?: string;

        /**
         * Суд
         */
        court?: string;

        /**
         * Дата вступления в законную силу
         */
        effective_date?: string;

        /**
         * Дата вынеселения постановления
         */
        issue_date?: string;
      }

      /**
       * Данные о ЮЛ или ИП внесенном в реестр неблагонадежных поставщиков (РНП)
       */
      export interface UnscrupulousSuppliersDetail {
        /**
         * Кем внесена - наименование
         */
        approve_org_full_name?: string;

        /**
         * Кем внесена - номер
         */
        approve_org_reg_num?: string;

        /**
         * Ожидаемая дата исключения
         */
        auto_ex_date?: string;

        /**
         * Информация об исключении из РНП
         */
        exclude_info?: UnscrupulousSuppliersDetail.ExcludeInfo;

        /**
         * Наименование ЮЛ или ИП в РНП
         */
        full_name?: string;

        /**
         * Ссылка на запись о включении
         */
        info_url?: string;

        /**
         * ИНН ЮЛ или ИП в РНП
         */
        inn?: string;

        /**
         * Тип списка РНП, возможные значения: FZ44, FZ223, PP615
         */
        list_type?: string;

        /**
         * Причина внесения
         */
        reason?: string;

        /**
         * Дата внесения
         */
        reason_date?: string;

        /**
         * Номер внесения в РНП
         */
        reg_number?: string;

        /**
         * Статус: внесен в реестр недобросовестных поставщиков, исклюен из списка РНП
         */
        status?: string;
      }

      export namespace UnscrupulousSuppliersDetail {
        /**
         * Информация об исключении из РНП
         */
        export interface ExcludeInfo {
          /**
           * Дата исключения из РНП
           */
          exclude_date?: string;

          /**
           * Ссылка на запись об исключении из РНП
           */
          exclude_info_url?: string;

          /**
           * Тип исключения: AUTO - автоматически, по истечению даты, MANUAL - вручную
           */
          exclude_type?: string;

          /**
           * Номер записи в РНП
           */
          reg_number?: string;
        }
      }
    }
  }
}

export interface BatchCardCreateParams {
  /**
   * Query param: API-ключ.
   */
  key: string;

  /**
   * Body param:
   */
  source_inns_or_ogrns?: Array<string>;
}

export declare namespace BatchCards {
  export {
    type BatchCardCreateResponse as BatchCardCreateResponse,
    type BatchCardCreateParams as BatchCardCreateParams,
  };
}
