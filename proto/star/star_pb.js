// source: star.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.botStatusRequest', null, global);
goog.exportSymbol('proto.botStatusRequest.status_type', null, global);
goog.exportSymbol('proto.botStatusResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.botStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.botStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.botStatusRequest.displayName = 'proto.botStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.botStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.botStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.botStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.botStatusResponse.displayName = 'proto.botStatusResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.botStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.botStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.botStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.botStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    botId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    eyeX: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    eyeY: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    msg: jspb.Message.getFieldWithDefault(msg, 6, ""),
    realX: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    realY: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    status: jspb.Message.getFieldWithDefault(msg, 9, 0),
    name: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.botStatusRequest}
 */
proto.botStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.botStatusRequest;
  return proto.botStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.botStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.botStatusRequest}
 */
proto.botStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBotId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setEyeX(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setEyeY(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRealX(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRealY(value);
      break;
    case 9:
      var value = /** @type {!proto.botStatusRequest.status_type} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.botStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.botStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.botStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.botStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getEyeX();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getEyeY();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRealX();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getRealY();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.botStatusRequest.status_type = {
  WAITING: 0,
  CONNECTING: 1,
  CLOSE: 2
};

/**
 * optional string bot_id = 1;
 * @return {string}
 */
proto.botStatusRequest.prototype.getBotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.botStatusRequest} returns this
 */
proto.botStatusRequest.prototype.setBotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float x = 2;
 * @return {number}
 */
proto.botStatusRequest.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.botStatusRequest} returns this
 */
proto.botStatusRequest.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float y = 3;
 * @return {number}
 */
proto.botStatusRequest.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.botStatusRequest} returns this
 */
proto.botStatusRequest.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float eye_x = 4;
 * @return {number}
 */
proto.botStatusRequest.prototype.getEyeX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.botStatusRequest} returns this
 */
proto.botStatusRequest.prototype.setEyeX = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float eye_y = 5;
 * @return {number}
 */
proto.botStatusRequest.prototype.getEyeY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.botStatusRequest} returns this
 */
proto.botStatusRequest.prototype.setEyeY = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional string msg = 6;
 * @return {string}
 */
proto.botStatusRequest.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.botStatusRequest} returns this
 */
proto.botStatusRequest.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional float real_x = 7;
 * @return {number}
 */
proto.botStatusRequest.prototype.getRealX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.botStatusRequest} returns this
 */
proto.botStatusRequest.prototype.setRealX = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional float real_y = 8;
 * @return {number}
 */
proto.botStatusRequest.prototype.getRealY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.botStatusRequest} returns this
 */
proto.botStatusRequest.prototype.setRealY = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional status_type status = 9;
 * @return {!proto.botStatusRequest.status_type}
 */
proto.botStatusRequest.prototype.getStatus = function() {
  return /** @type {!proto.botStatusRequest.status_type} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.botStatusRequest.status_type} value
 * @return {!proto.botStatusRequest} returns this
 */
proto.botStatusRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional string name = 10;
 * @return {string}
 */
proto.botStatusRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.botStatusRequest} returns this
 */
proto.botStatusRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.botStatusResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.botStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.botStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.botStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.botStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    botStatusList: jspb.Message.toObjectList(msg.getBotStatusList(),
    proto.botStatusRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.botStatusResponse}
 */
proto.botStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.botStatusResponse;
  return proto.botStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.botStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.botStatusResponse}
 */
proto.botStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.botStatusRequest;
      reader.readMessage(value,proto.botStatusRequest.deserializeBinaryFromReader);
      msg.addBotStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.botStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.botStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.botStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.botStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBotStatusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.botStatusRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated botStatusRequest bot_status = 1;
 * @return {!Array<!proto.botStatusRequest>}
 */
proto.botStatusResponse.prototype.getBotStatusList = function() {
  return /** @type{!Array<!proto.botStatusRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.botStatusRequest, 1));
};


/**
 * @param {!Array<!proto.botStatusRequest>} value
 * @return {!proto.botStatusResponse} returns this
*/
proto.botStatusResponse.prototype.setBotStatusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.botStatusRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.botStatusRequest}
 */
proto.botStatusResponse.prototype.addBotStatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.botStatusRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.botStatusResponse} returns this
 */
proto.botStatusResponse.prototype.clearBotStatusList = function() {
  return this.setBotStatusList([]);
};


goog.object.extend(exports, proto);