/// <reference path="../node_modules/@types/xrm/index.d.ts" />
declare namespace AccountEnum {
    const enum accountratingcode {
        DefaultValue = 1,
    }

    const enum territorycode {
        DefaultValue = 1,
    }

    const enum address2_shippingmethodcode {
        DefaultValue = 1,
    }

    const enum customersizecode {
        DefaultValue = 1,
    }

    const enum address2_freighttermscode {
        DefaultValue = 1,
    }

    const enum accountcategorycode {
        PreferredCustomer = 1,
        Standard = 2,
    }

    const enum industrycode {
        Accounting = 1,
        AgricultureAndNonPetrolNaturalResourceExtraction = 2,
        BroadcastingPrintingAndPublishing = 3,
        Brokers = 4,
        BuildingSupplyRetail = 5,
        BusinessServices = 6,
        Consulting = 7,
        ConsumerServices = 8,
        DesignDirectionAndCreativeManagement = 9,
        DistributorsDispatchersAndProcessors = 10,
        DoctorSOfficesAndClinics = 11,
        DurableManufacturing = 12,
        EatingAndDrinkingPlaces = 13,
        EntertainmentRetail = 14,
        EquipmentRentalAndLeasing = 15,
        Financial = 16,
        FoodAndTobaccoProcessing = 17,
        InboundCapitalIntensiveProcessing = 18,
        InboundRepairAndServices = 19,
        Insurance = 20,
        LegalServices = 21,
        NonDurableMerchandiseRetail = 22,
        OutboundConsumerService = 23,
        PetrochemicalExtractionAndDistribution = 24,
        ServiceRetail = 25,
        SigAffiliations = 26,
        SocialServices = 27,
        SpecialOutboundTradeContractors = 28,
        SpecialtyRealty = 29,
        Transportation = 30,
        UtilityCreationAndDistribution = 31,
        VehicleRetail = 32,
        Wholesale = 33,
    }

    const enum accountclassificationcode {
        DefaultValue = 1,
    }

    const enum address2_addresstypecode {
        DefaultValue = 1,
    }

    const enum ownershipcode {
        Public = 1,
        Private = 2,
        Subsidiary = 3,
        Other = 4,
    }

    const enum preferredappointmenttimecode {
        Morning = 1,
        Afternoon = 2,
        Evening = 3,
    }

    const enum shippingmethodcode {
        DefaultValue = 1,
    }

    const enum address1_addresstypecode {
        BillTo = 1,
        ShipTo = 2,
        Primary = 3,
        Other = 4,
    }

    const enum businesstypecode {
        DefaultValue = 1,
    }

    const enum address1_shippingmethodcode {
        Airborne = 1,
        Dhl = 2,
        Fedex = 3,
        Ups = 4,
        PostalMail = 5,
        FullLoad = 6,
        WillCall = 7,
    }

    const enum preferredcontactmethodcode {
        Any = 1,
        Email = 2,
        Phone = 3,
        Fax = 4,
        Mail = 5,
    }

    const enum preferredappointmentdaycode {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6,
    }

    const enum paymenttermscode {
        Net30 = 1,
        _210Net30 = 2,
        Net45 = 3,
        Net60 = 4,
    }

    const enum customertypecode {
        Competitor = 1,
        Consultant = 2,
        Customer = 3,
        Investor = 4,
        Partner = 5,
        Influencer = 6,
        Press = 7,
        Prospect = 8,
        Reseller = 9,
        Supplier = 10,
        Vendor = 11,
        Other = 12,
    }

    const enum address1_freighttermscode {
        Fob = 1,
        NoCharge = 2,
    }

}

declare namespace Xrm {
    type Account = Omit<FormContext, 'getAttribute'> & Omit<FormContext, 'getControl'> & AccountAttributes;

    interface EventContext {
        getFormContext(): Account;
    }

    interface AccountAttributes {
        getAttribute(name: "accountcategorycode"): Attributes.Attribute;
        getAttribute(name: "accountclassificationcode"): Attributes.Attribute;
        getAttribute(name: "accountid"): Attributes.Attribute;
        getAttribute(name: "accountnumber"): Attributes.Attribute;
        getAttribute(name: "accountratingcode"): Attributes.Attribute;
        getAttribute(name: "address1_addresstypecode"): Attributes.Attribute;
        getAttribute(name: "address1_city"): Attributes.Attribute;
        getAttribute(name: "address1_composite"): Attributes.Attribute;
        getAttribute(name: "address1_country"): Attributes.Attribute;
        getAttribute(name: "address1_county"): Attributes.Attribute;
        getAttribute(name: "address1_fax"): Attributes.Attribute;
        getAttribute(name: "address1_freighttermscode"): Attributes.Attribute;
        getAttribute(name: "address1_latitude"): Attributes.Attribute;
        getAttribute(name: "address1_line1"): Attributes.Attribute;
        getAttribute(name: "address1_line2"): Attributes.Attribute;
        getAttribute(name: "address1_line3"): Attributes.Attribute;
        getAttribute(name: "address1_longitude"): Attributes.Attribute;
        getAttribute(name: "address1_name"): Attributes.Attribute;
        getAttribute(name: "address1_postalcode"): Attributes.Attribute;
        getAttribute(name: "address1_postofficebox"): Attributes.Attribute;
        getAttribute(name: "address1_primarycontactname"): Attributes.Attribute;
        getAttribute(name: "address1_shippingmethodcode"): Attributes.Attribute;
        getAttribute(name: "address1_stateorprovince"): Attributes.Attribute;
        getAttribute(name: "address1_telephone1"): Attributes.Attribute;
        getAttribute(name: "address1_telephone2"): Attributes.Attribute;
        getAttribute(name: "address1_telephone3"): Attributes.Attribute;
        getAttribute(name: "address1_upszone"): Attributes.Attribute;
        getAttribute(name: "address1_utcoffset"): Attributes.Attribute;
        getAttribute(name: "address2_addresstypecode"): Attributes.Attribute;
        getAttribute(name: "address2_city"): Attributes.Attribute;
        getAttribute(name: "address2_composite"): Attributes.Attribute;
        getAttribute(name: "address2_country"): Attributes.Attribute;
        getAttribute(name: "address2_county"): Attributes.Attribute;
        getAttribute(name: "address2_fax"): Attributes.Attribute;
        getAttribute(name: "address2_freighttermscode"): Attributes.Attribute;
        getAttribute(name: "address2_latitude"): Attributes.Attribute;
        getAttribute(name: "address2_line1"): Attributes.Attribute;
        getAttribute(name: "address2_line2"): Attributes.Attribute;
        getAttribute(name: "address2_line3"): Attributes.Attribute;
        getAttribute(name: "address2_longitude"): Attributes.Attribute;
        getAttribute(name: "address2_name"): Attributes.Attribute;
        getAttribute(name: "address2_postalcode"): Attributes.Attribute;
        getAttribute(name: "address2_postofficebox"): Attributes.Attribute;
        getAttribute(name: "address2_primarycontactname"): Attributes.Attribute;
        getAttribute(name: "address2_shippingmethodcode"): Attributes.Attribute;
        getAttribute(name: "address2_stateorprovince"): Attributes.Attribute;
        getAttribute(name: "address2_telephone1"): Attributes.Attribute;
        getAttribute(name: "address2_telephone2"): Attributes.Attribute;
        getAttribute(name: "address2_telephone3"): Attributes.Attribute;
        getAttribute(name: "address2_upszone"): Attributes.Attribute;
        getAttribute(name: "address2_utcoffset"): Attributes.Attribute;
        getAttribute(name: "adx_createdbyipaddress"): Attributes.Attribute;
        getAttribute(name: "adx_createdbyusername"): Attributes.Attribute;
        getAttribute(name: "adx_modifiedbyipaddress"): Attributes.Attribute;
        getAttribute(name: "adx_modifiedbyusername"): Attributes.Attribute;
        getAttribute(name: "aging30"): Attributes.Attribute;
        getAttribute(name: "aging60"): Attributes.Attribute;
        getAttribute(name: "aging90"): Attributes.Attribute;
        getAttribute(name: "businesstypecode"): Attributes.Attribute;
        getAttribute(name: "createdby"): Attributes.Attribute;
        getAttribute(name: "createdbyexternalparty"): Attributes.Attribute;
        getAttribute(name: "createdon"): Attributes.Attribute;
        getAttribute(name: "createdonbehalfby"): Attributes.Attribute;
        getAttribute(name: "creditlimit"): Attributes.Attribute;
        getAttribute(name: "creditonhold"): Attributes.Attribute;
        getAttribute(name: "customersizecode"): Attributes.Attribute;
        getAttribute(name: "customertypecode"): Attributes.Attribute;
        getAttribute(name: "description"): Attributes.Attribute;
        getAttribute(name: "donotbulkemail"): Attributes.Attribute;
        getAttribute(name: "donotbulkpostalmail"): Attributes.Attribute;
        getAttribute(name: "donotemail"): Attributes.Attribute;
        getAttribute(name: "donotfax"): Attributes.Attribute;
        getAttribute(name: "donotphone"): Attributes.Attribute;
        getAttribute(name: "donotpostalmail"): Attributes.Attribute;
        getAttribute(name: "donotsendmm"): Attributes.Attribute;
        getAttribute(name: "emailaddress1"): Attributes.Attribute;
        getAttribute(name: "emailaddress2"): Attributes.Attribute;
        getAttribute(name: "emailaddress3"): Attributes.Attribute;
        getAttribute(name: "exchangerate"): Attributes.Attribute;
        getAttribute(name: "fax"): Attributes.Attribute;
        getAttribute(name: "followemail"): Attributes.Attribute;
        getAttribute(name: "ftpsiteurl"): Attributes.Attribute;
        getAttribute(name: "importsequencenumber"): Attributes.Attribute;
        getAttribute(name: "industrycode"): Attributes.Attribute;
        getAttribute(name: "lastonholdtime"): Attributes.Attribute;
        getAttribute(name: "lastusedincampaign"): Attributes.Attribute;
        getAttribute(name: "marketcap"): Attributes.Attribute;
        getAttribute(name: "marketingonly"): Attributes.Attribute;
        getAttribute(name: "masterid"): Attributes.Attribute;
        getAttribute(name: "merged"): Attributes.Attribute;
        getAttribute(name: "modifiedby"): Attributes.Attribute;
        getAttribute(name: "modifiedbyexternalparty"): Attributes.Attribute;
        getAttribute(name: "modifiedon"): Attributes.Attribute;
        getAttribute(name: "modifiedonbehalfby"): Attributes.Attribute;
        getAttribute(name: "msa_managingpartnerid"): Attributes.Attribute;
        getAttribute(name: "msa_managingpartneridname"): Attributes.Attribute;
        getAttribute(name: "msa_managingpartneridyominame"): Attributes.Attribute;
        getAttribute(name: "name"): Attributes.Attribute;
        getAttribute(name: "numberofemployees"): Attributes.Attribute;
        getAttribute(name: "onholdtime"): Attributes.Attribute;
        getAttribute(name: "overriddencreatedon"): Attributes.Attribute;
        getAttribute(name: "ownerid"): Attributes.Attribute;
        getAttribute(name: "ownershipcode"): Attributes.Attribute;
        getAttribute(name: "owningbusinessunit"): Attributes.Attribute;
        getAttribute(name: "owningbusinessunitname"): Attributes.Attribute;
        getAttribute(name: "owningteam"): Attributes.Attribute;
        getAttribute(name: "owninguser"): Attributes.Attribute;
        getAttribute(name: "parentaccountid"): Attributes.Attribute;
        getAttribute(name: "participatesinworkflow"): Attributes.Attribute;
        getAttribute(name: "paymenttermscode"): Attributes.Attribute;
        getAttribute(name: "powm_democountrycode"): Attributes.Attribute;
        getAttribute(name: "powm_demodetectlanguage"): Attributes.Attribute;
        getAttribute(name: "powm_demoidentifyentities"): Attributes.Attribute;
        getAttribute(name: "powm_demoidentifykeyphrases"): Attributes.Attribute;
        getAttribute(name: "powm_demotextanalyticsfield"): Attributes.Attribute;
        getAttribute(name: "powm_demozipcode"): Attributes.Attribute;
        getAttribute(name: "preferredappointmentdaycode"): Attributes.Attribute;
        getAttribute(name: "preferredappointmenttimecode"): Attributes.Attribute;
        getAttribute(name: "preferredcontactmethodcode"): Attributes.Attribute;
        getAttribute(name: "preferredsystemuserid"): Attributes.Attribute;
        getAttribute(name: "primarycontactid"): Attributes.Attribute;
        getAttribute(name: "primarysatoriid"): Attributes.Attribute;
        getAttribute(name: "primarytwitterid"): Attributes.Attribute;
        getAttribute(name: "revenue"): Attributes.Attribute;
        getAttribute(name: "sharesoutstanding"): Attributes.Attribute;
        getAttribute(name: "shippingmethodcode"): Attributes.Attribute;
        getAttribute(name: "sic"): Attributes.Attribute;
        getAttribute(name: "slaid"): Attributes.Attribute;
        getAttribute(name: "slainvokedid"): Attributes.Attribute;
        getAttribute(name: "statecode"): Attributes.Attribute;
        getAttribute(name: "statuscode"): Attributes.Attribute;
        getAttribute(name: "stockexchange"): Attributes.Attribute;
        getAttribute(name: "telephone1"): Attributes.Attribute;
        getAttribute(name: "telephone2"): Attributes.Attribute;
        getAttribute(name: "telephone3"): Attributes.Attribute;
        getAttribute(name: "territorycode"): Attributes.Attribute;
        getAttribute(name: "tickersymbol"): Attributes.Attribute;
        getAttribute(name: "timespentbymeonemailandmeetings"): Attributes.Attribute;
        getAttribute(name: "timezoneruleversionnumber"): Attributes.Attribute;
        getAttribute(name: "transactioncurrencyid"): Attributes.Attribute;
        getAttribute(name: "traversedpath"): Attributes.Attribute;
        getAttribute(name: "utcconversiontimezonecode"): Attributes.Attribute;
        getAttribute(name: "websiteurl"): Attributes.Attribute;
        getAttribute(name: "yominame"): Attributes.Attribute;
        getControl(name: "accountcategorycode"): Controls.StandardControl;
        getControl(name: "accountclassificationcode"): Controls.StandardControl;
        getControl(name: "accountid"): Controls.StandardControl;
        getControl(name: "accountnumber"): Controls.StandardControl;
        getControl(name: "accountratingcode"): Controls.StandardControl;
        getControl(name: "address1_addresstypecode"): Controls.StandardControl;
        getControl(name: "address1_city"): Controls.StandardControl;
        getControl(name: "address1_composite"): Controls.StandardControl;
        getControl(name: "address1_country"): Controls.StandardControl;
        getControl(name: "address1_county"): Controls.StandardControl;
        getControl(name: "address1_fax"): Controls.StandardControl;
        getControl(name: "address1_freighttermscode"): Controls.StandardControl;
        getControl(name: "address1_latitude"): Controls.StandardControl;
        getControl(name: "address1_line1"): Controls.StandardControl;
        getControl(name: "address1_line2"): Controls.StandardControl;
        getControl(name: "address1_line3"): Controls.StandardControl;
        getControl(name: "address1_longitude"): Controls.StandardControl;
        getControl(name: "address1_name"): Controls.StandardControl;
        getControl(name: "address1_postalcode"): Controls.StandardControl;
        getControl(name: "address1_postofficebox"): Controls.StandardControl;
        getControl(name: "address1_primarycontactname"): Controls.StandardControl;
        getControl(name: "address1_shippingmethodcode"): Controls.StandardControl;
        getControl(name: "address1_stateorprovince"): Controls.StandardControl;
        getControl(name: "address1_telephone1"): Controls.StandardControl;
        getControl(name: "address1_telephone2"): Controls.StandardControl;
        getControl(name: "address1_telephone3"): Controls.StandardControl;
        getControl(name: "address1_upszone"): Controls.StandardControl;
        getControl(name: "address1_utcoffset"): Controls.StandardControl;
        getControl(name: "address2_addresstypecode"): Controls.StandardControl;
        getControl(name: "address2_city"): Controls.StandardControl;
        getControl(name: "address2_composite"): Controls.StandardControl;
        getControl(name: "address2_country"): Controls.StandardControl;
        getControl(name: "address2_county"): Controls.StandardControl;
        getControl(name: "address2_fax"): Controls.StandardControl;
        getControl(name: "address2_freighttermscode"): Controls.StandardControl;
        getControl(name: "address2_latitude"): Controls.StandardControl;
        getControl(name: "address2_line1"): Controls.StandardControl;
        getControl(name: "address2_line2"): Controls.StandardControl;
        getControl(name: "address2_line3"): Controls.StandardControl;
        getControl(name: "address2_longitude"): Controls.StandardControl;
        getControl(name: "address2_name"): Controls.StandardControl;
        getControl(name: "address2_postalcode"): Controls.StandardControl;
        getControl(name: "address2_postofficebox"): Controls.StandardControl;
        getControl(name: "address2_primarycontactname"): Controls.StandardControl;
        getControl(name: "address2_shippingmethodcode"): Controls.StandardControl;
        getControl(name: "address2_stateorprovince"): Controls.StandardControl;
        getControl(name: "address2_telephone1"): Controls.StandardControl;
        getControl(name: "address2_telephone2"): Controls.StandardControl;
        getControl(name: "address2_telephone3"): Controls.StandardControl;
        getControl(name: "address2_upszone"): Controls.StandardControl;
        getControl(name: "address2_utcoffset"): Controls.StandardControl;
        getControl(name: "adx_createdbyipaddress"): Controls.StandardControl;
        getControl(name: "adx_createdbyusername"): Controls.StandardControl;
        getControl(name: "adx_modifiedbyipaddress"): Controls.StandardControl;
        getControl(name: "adx_modifiedbyusername"): Controls.StandardControl;
        getControl(name: "aging30"): Controls.StandardControl;
        getControl(name: "aging60"): Controls.StandardControl;
        getControl(name: "aging90"): Controls.StandardControl;
        getControl(name: "businesstypecode"): Controls.StandardControl;
        getControl(name: "createdby"): Controls.StandardControl;
        getControl(name: "createdbyexternalparty"): Controls.StandardControl;
        getControl(name: "createdon"): Controls.StandardControl;
        getControl(name: "createdonbehalfby"): Controls.StandardControl;
        getControl(name: "creditlimit"): Controls.StandardControl;
        getControl(name: "creditonhold"): Controls.StandardControl;
        getControl(name: "customersizecode"): Controls.StandardControl;
        getControl(name: "customertypecode"): Controls.StandardControl;
        getControl(name: "description"): Controls.StandardControl;
        getControl(name: "donotbulkemail"): Controls.StandardControl;
        getControl(name: "donotbulkpostalmail"): Controls.StandardControl;
        getControl(name: "donotemail"): Controls.StandardControl;
        getControl(name: "donotfax"): Controls.StandardControl;
        getControl(name: "donotphone"): Controls.StandardControl;
        getControl(name: "donotpostalmail"): Controls.StandardControl;
        getControl(name: "donotsendmm"): Controls.StandardControl;
        getControl(name: "emailaddress1"): Controls.StandardControl;
        getControl(name: "emailaddress2"): Controls.StandardControl;
        getControl(name: "emailaddress3"): Controls.StandardControl;
        getControl(name: "exchangerate"): Controls.StandardControl;
        getControl(name: "fax"): Controls.StandardControl;
        getControl(name: "followemail"): Controls.StandardControl;
        getControl(name: "ftpsiteurl"): Controls.StandardControl;
        getControl(name: "importsequencenumber"): Controls.StandardControl;
        getControl(name: "industrycode"): Controls.StandardControl;
        getControl(name: "lastonholdtime"): Controls.StandardControl;
        getControl(name: "lastusedincampaign"): Controls.StandardControl;
        getControl(name: "marketcap"): Controls.StandardControl;
        getControl(name: "marketingonly"): Controls.StandardControl;
        getControl(name: "masterid"): Controls.StandardControl;
        getControl(name: "merged"): Controls.StandardControl;
        getControl(name: "modifiedby"): Controls.StandardControl;
        getControl(name: "modifiedbyexternalparty"): Controls.StandardControl;
        getControl(name: "modifiedon"): Controls.StandardControl;
        getControl(name: "modifiedonbehalfby"): Controls.StandardControl;
        getControl(name: "msa_managingpartnerid"): Controls.StandardControl;
        getControl(name: "msa_managingpartneridname"): Controls.StandardControl;
        getControl(name: "msa_managingpartneridyominame"): Controls.StandardControl;
        getControl(name: "name"): Controls.StandardControl;
        getControl(name: "numberofemployees"): Controls.StandardControl;
        getControl(name: "onholdtime"): Controls.StandardControl;
        getControl(name: "overriddencreatedon"): Controls.StandardControl;
        getControl(name: "ownerid"): Controls.StandardControl;
        getControl(name: "ownershipcode"): Controls.StandardControl;
        getControl(name: "owningbusinessunit"): Controls.StandardControl;
        getControl(name: "owningbusinessunitname"): Controls.StandardControl;
        getControl(name: "owningteam"): Controls.StandardControl;
        getControl(name: "owninguser"): Controls.StandardControl;
        getControl(name: "parentaccountid"): Controls.StandardControl;
        getControl(name: "participatesinworkflow"): Controls.StandardControl;
        getControl(name: "paymenttermscode"): Controls.StandardControl;
        getControl(name: "powm_democountrycode"): Controls.StandardControl;
        getControl(name: "powm_demodetectlanguage"): Controls.StandardControl;
        getControl(name: "powm_demoidentifyentities"): Controls.StandardControl;
        getControl(name: "powm_demoidentifykeyphrases"): Controls.StandardControl;
        getControl(name: "powm_demotextanalyticsfield"): Controls.StandardControl;
        getControl(name: "powm_demozipcode"): Controls.StandardControl;
        getControl(name: "preferredappointmentdaycode"): Controls.StandardControl;
        getControl(name: "preferredappointmenttimecode"): Controls.StandardControl;
        getControl(name: "preferredcontactmethodcode"): Controls.StandardControl;
        getControl(name: "preferredsystemuserid"): Controls.StandardControl;
        getControl(name: "primarycontactid"): Controls.StandardControl;
        getControl(name: "primarysatoriid"): Controls.StandardControl;
        getControl(name: "primarytwitterid"): Controls.StandardControl;
        getControl(name: "revenue"): Controls.StandardControl;
        getControl(name: "sharesoutstanding"): Controls.StandardControl;
        getControl(name: "shippingmethodcode"): Controls.StandardControl;
        getControl(name: "sic"): Controls.StandardControl;
        getControl(name: "slaid"): Controls.StandardControl;
        getControl(name: "slainvokedid"): Controls.StandardControl;
        getControl(name: "statecode"): Controls.StandardControl;
        getControl(name: "statuscode"): Controls.StandardControl;
        getControl(name: "stockexchange"): Controls.StandardControl;
        getControl(name: "telephone1"): Controls.StandardControl;
        getControl(name: "telephone2"): Controls.StandardControl;
        getControl(name: "telephone3"): Controls.StandardControl;
        getControl(name: "territorycode"): Controls.StandardControl;
        getControl(name: "tickersymbol"): Controls.StandardControl;
        getControl(name: "timespentbymeonemailandmeetings"): Controls.StandardControl;
        getControl(name: "timezoneruleversionnumber"): Controls.StandardControl;
        getControl(name: "transactioncurrencyid"): Controls.StandardControl;
        getControl(name: "traversedpath"): Controls.StandardControl;
        getControl(name: "utcconversiontimezonecode"): Controls.StandardControl;
        getControl(name: "websiteurl"): Controls.StandardControl;
        getControl(name: "yominame"): Controls.StandardControl;
    }

}

