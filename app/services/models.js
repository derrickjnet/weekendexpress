define(['require'], function(require) {

    /**
     * Models generated from "Model and Storage" and models extracted from services.
     * To generate entity use syntax:
     * Apperyio.EntityAPI("<model_name>[.<model_field>]");
     */

    var models = {
        "String": {
            "type": "string"
        },
        "Number": {
            "type": "number"
        },
        "Business": {
            "type": "object",
            "properties": {
                "lng": {
                    "type": "string"
                },
                "lat": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "rating": {
                    "type": "string"
                },
                "review": {
                    "type": "string"
                },
                "url": {
                    "type": "string"
                },
                "image": {
                    "type": "string"
                }
            }
        },
        "Boolean": {
            "type": "boolean"
        },
        "BusinessList": {
            "type": "array",
            "items": [{
                "type": "Business"
            }]
        },
        "Disrupt_Yelp_bookrides_get": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/apiexpress/api/Yelp/bookrides"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {}
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Api-Express-Api-Key": {
                                    "type": "string",
                                    "default": "{Disrupt_settings.API_EXPRESS_API_KEY}"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "HTTP_RESPONSE_CODE": {
                                            "type": "number",
                                            "default": 200
                                        },
                                        "HTTP_RESPONSE_HEADERS": {
                                            "type": "object",
                                            "properties": {
                                                "access-control-allow-headers": {
                                                    "type": "string",
                                                    "default": "Origin, Content-Type, Content-Encoding, Authorization, Grpc-Metadata-x-h3r-traffic"
                                                },
                                                "grpc-metadata-content-type": {
                                                    "type": "string",
                                                    "default": "application/grpc"
                                                },
                                                "access-control-allow-origin": {
                                                    "type": "string",
                                                    "default": "*"
                                                },
                                                "content-length": {
                                                    "type": "string",
                                                    "default": "2005"
                                                },
                                                "x-envoy-upstream-service-time": {
                                                    "type": "string",
                                                    "default": "183"
                                                },
                                                "access-control-expose-headers": {
                                                    "type": "string",
                                                    "default": "Content-Length"
                                                },
                                                "date": {
                                                    "type": "string",
                                                    "default": "Thu, 02 Aug 2018 02:37:22 GMT"
                                                },
                                                "content-type": {
                                                    "type": "string",
                                                    "default": "application/json"
                                                },
                                                "server": {
                                                    "type": "string",
                                                    "default": "HereMobilityEdge"
                                                },
                                                "access-control-allow-methods": {
                                                    "type": "string",
                                                    "default": "GET, POST, PATCH, DELETE, OPTIONS"
                                                }
                                            }
                                        },
                                        "BODY": {
                                            "type": "object",
                                            "properties": {
                                                "offers": {
                                                    "type": "array",
                                                    "items": [{
                                                        "type": "object",
                                                        "properties": {
                                                            "offer_expiration_time_ms": {
                                                                "type": "string"
                                                            },
                                                            "supplier": {
                                                                "type": "object",
                                                                "properties": {
                                                                    "phone_number": {
                                                                        "type": "string"
                                                                    },
                                                                    "address": {
                                                                        "type": "string"
                                                                    },
                                                                    "local_name": {
                                                                        "type": "string"
                                                                    },
                                                                    "english_name": {
                                                                        "type": "string"
                                                                    },
                                                                    "supplier_id": {
                                                                        "type": "string"
                                                                    },
                                                                    "logo_url": {
                                                                        "type": "string"
                                                                    }
                                                                }
                                                            },
                                                            "price_estimation": {
                                                                "type": "object",
                                                                "properties": {
                                                                    "range": {
                                                                        "type": "object",
                                                                        "properties": {
                                                                            "upper_bound": {
                                                                                "type": "string"
                                                                            },
                                                                            "currency_code": {
                                                                                "type": "string"
                                                                            },
                                                                            "lower_bound": {
                                                                                "type": "string"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            "cancellation_policy": {
                                                                "type": "string"
                                                            },
                                                            "offer_id": {
                                                                "type": "string"
                                                            },
                                                            "estimated_pickup_time_ms": {
                                                                "type": "string"
                                                            },
                                                            "transit_type": {
                                                                "type": "string"
                                                            }
                                                        }
                                                    }]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "Disrupt_Yelp_businesses_get": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/apiexpress/api/Yelp/businesses"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {}
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Api-Express-Api-Key": {
                                    "type": "string",
                                    "default": "{Disrupt_settings.API_EXPRESS_API_KEY}"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "total": {
                                            "type": "number",
                                            "default": 101
                                        },
                                        "businesses": {
                                            "type": "array",
                                            "items": [{
                                                "type": "object",
                                                "properties": {
                                                    "alias": {
                                                        "type": "string"
                                                    },
                                                    "display_phone": {
                                                        "type": "string"
                                                    },
                                                    "rating": {
                                                        "type": "number",
                                                        "default": null
                                                    },
                                                    "id": {
                                                        "type": "string"
                                                    },
                                                    "transactions": {
                                                        "type": "array",
                                                        "items": [{
                                                            "type": "string"
                                                        }]
                                                    },
                                                    "image_url": {
                                                        "type": "string"
                                                    },
                                                    "is_closed": {
                                                        "type": "boolean",
                                                        "default": null
                                                    },
                                                    "distance": {
                                                        "type": "number",
                                                        "default": null
                                                    },
                                                    "phone": {
                                                        "type": "string"
                                                    },
                                                    "location": {
                                                        "type": "object",
                                                        "properties": {
                                                            "address1": {
                                                                "type": "string"
                                                            },
                                                            "country": {
                                                                "type": "string"
                                                            },
                                                            "address3": {
                                                                "type": "string"
                                                            },
                                                            "display_address": {
                                                                "type": "array",
                                                                "items": [{
                                                                    "type": "string"
                                                                }]
                                                            },
                                                            "address2": {
                                                                "type": "string"
                                                            },
                                                            "city": {
                                                                "type": "string"
                                                            },
                                                            "zip_code": {
                                                                "type": "string"
                                                            },
                                                            "state": {
                                                                "type": "string"
                                                            }
                                                        }
                                                    },
                                                    "review_count": {
                                                        "type": "number",
                                                        "default": null
                                                    },
                                                    "coordinates": {
                                                        "type": "object",
                                                        "properties": {
                                                            "latitude": {
                                                                "type": "number",
                                                                "default": null
                                                            },
                                                            "longitude": {
                                                                "type": "number",
                                                                "default": null
                                                            }
                                                        }
                                                    },
                                                    "name": {
                                                        "type": "string"
                                                    },
                                                    "categories": {
                                                        "type": "array",
                                                        "items": [{
                                                            "type": "object",
                                                            "properties": {
                                                                "alias": {
                                                                    "type": "string"
                                                                },
                                                                "title": {
                                                                    "type": "string"
                                                                }
                                                            }
                                                        }]
                                                    },
                                                    "url": {
                                                        "type": "string"
                                                    }
                                                }
                                            }]
                                        },
                                        "region": {
                                            "type": "object",
                                            "properties": {
                                                "center": {
                                                    "type": "object",
                                                    "properties": {
                                                        "longitude": {
                                                            "type": "number",
                                                            "default": -122.399972
                                                        },
                                                        "latitude": {
                                                            "type": "number",
                                                            "default": 37.786882
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    return models;

});