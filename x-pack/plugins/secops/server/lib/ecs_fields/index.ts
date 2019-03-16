/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { extendMap } from './extend_map';

export const osFieldsMap: Readonly<Record<string, string>> = {
  'os.platform': 'os.platform',
  'os.name': 'os.name',
  'os.full': 'os.full',
  'os.family': 'os.family',
  'os.version': 'os.version',
  'os.kernel': 'os.kernel',
};

export const hostFieldsMap: Readonly<Record<string, string>> = {
  'host.architecture': 'host.architecture',
  'host.id': 'host.id',
  'host.ip': 'host.ip',
  'host.mac': 'host.mac',
  'host.name': 'host.name',
  'host.type': 'cloud.machine.type',
  ...extendMap('host', osFieldsMap),
};

export const processFieldsMap: Readonly<Record<string, string>> = {
  'process.pid': 'process.pid',
  'process.name': 'process.name',
  'process.ppid': 'process.ppid',
  'process.args': 'process.args',
  'process.executable': 'process.executable',
  'process.title': 'process.title',
  'process.thread': 'process.thread',
  'process.working_directory': 'process.working_directory',
};

export const userFieldsMap: Readonly<Record<string, string>> = {
  'user.id': 'user.id',
  'user.name': 'user.name',
  // NOTE: This field is not tested and available from ECS. Please remove this tag once it is
  'user.full_name': 'user.full_name',
  // NOTE: This field is not tested and available from ECS. Please remove this tag once it is
  'user.email': 'user.email',
  // NOTE: This field is not tested and available from ECS. Please remove this tag once it is
  'user.hash': 'user.hash',
  // NOTE: This field is not tested and available from ECS. Please remove this tag once it is
  'user.group': 'user.group',
};

export const suricataFieldsMap: Readonly<Record<string, string>> = {
  'suricata.eve.flow_id': 'suricata.eve.flow_id',
  'suricata.eve.proto': 'suricata.eve.proto',
  'suricata.eve.alert.signature': 'suricata.eve.alert.signature',
  'suricata.eve.alert.signature_id': 'suricata.eve.alert.signature_id',
};

export const urlFieldsMap: Readonly<Record<string, string>> = {
  'url.original': 'url.original',
  'url.domain': 'url.domain',
  'user.username': 'user.username',
  'user.password': 'user.password',
};

export const httpFieldsMap: Readonly<Record<string, string>> = {
  'http.version': 'http.version',
  'http.request': 'http.request',
  'http.request.method': 'http.request.method',
  'http.request.body.bytes': 'http.request.body.bytes',
  'http.request.body.content': 'http.request.body.content',
  'http.request.referrer': 'http.request.referrer',
  'http.response.status_code': 'http.response.status_code',
  'http.response.body': 'http.response.body',
  'http.response.body.bytes': 'http.response.body.bytes',
  'http.response.body.content': 'http.response.body.content',
};

export const zeekFieldsMap: Readonly<Record<string, string>> = {
  'zeek.session_id': 'zeek.session_id',
  'zeek.connection.local_resp': 'zeek.connection.local_resp',
  'zeek.connection.local_orig': 'zeek.connection.local_orig',
  'zeek.connection.missed_bytes': 'zeek.connection.missed_bytes',
  'zeek.connection.state': 'zeek.connection.state',
  'zeek.connection.history': 'zeek.connection.history',
  'zeek.notice.suppress_for': 'zeek.notice.suppress_for',
  'zeek.notice.msg': 'zeek.notice.msg',
  'zeek.notice.note': 'zeek.notice.note',
  'zeek.notice.sub': 'zeek.notice.sub',
  'zeek.notice.dst': 'zeek.notice.dst',
  'zeek.notice.dropped': 'zeek.notice.dropped',
  'zeek.notice.peer_descr': 'zeek.notice.peer_descr',
  'zeek.dns.AA': 'zeek.dns.AA',
  'zeek.dns.qclass_name': 'zeek.dns.qclass_name',
  'zeek.dns.RD': 'zeek.dns.RD',
  'zeek.dns.qtype_name': 'zeek.dns.qtype_name',
  'zeek.dns.qtype': 'zeek.dns.qtype',
  'zeek.dns.query': 'zeek.dns.query',
  'zeek.dns.trans_id': 'zeek.dns.trans_id',
  'zeek.dns.qclass': 'zeek.dns.qclass',
  'zeek.dns.RA': 'zeek.dns.RA',
  'zeek.dns.TC': 'zeek.dns.TC',
  'zeek.http.resp_mime_types': 'zeek.http.resp_mime_types',
  'zeek.http.trans_depth': 'zeek.http.trans_depth',
  'zeek.http.status_msg': 'zeek.http.status_msg',
  'zeek.http.resp_fuids': 'zeek.http.resp_fuids',
  'zeek.http.tags': 'zeek.http.tags',
  'zeek.files.session_ids': 'zeek.files.session_ids',
  'zeek.files.timedout': 'zeek.files.timedout',
  'zeek.files.local_orig': 'zeek.files.local_orig',
  'zeek.files.tx_host': 'zeek.files.tx_host',
  'zeek.files.source': 'zeek.files.source',
  'zeek.files.is_orig': 'zeek.files.is_orig',
  'zeek.files.overflow_bytes': 'zeek.files.overflow_bytes',
  'zeek.files.sha1': 'zeek.files.sha1',
  'zeek.files.duration': 'zeek.files.duration',
  'zeek.files.depth': 'zeek.files.depth',
  'zeek.files.analyzers': 'zeek.files.analyzers',
  'zeek.files.mime_type': 'zeek.files.mime_type',
  'zeek.files.rx_host': 'zeek.files.rx_host',
  'zeek.files.total_bytes': 'zeek.files.total_bytes',
  'zeek.files.fuid': 'zeek.files.fuid',
  'zeek.files.seen_bytes': 'zeek.files.seen_bytes',
  'zeek.files.missing_bytes': 'zeek.files.missing_bytes',
  'zeek.files.md5': 'zeek.files.md5',
  'zeek.ssl.cipher': 'zeek.ssl.cipher',
  'zeek.ssl.established': 'zeek.ssl.established',
  'zeek.ssl.resumed': 'zeek.ssl.resumed',
  'zeek.ssl.version': 'zeek.ssl.version',
};

export const sourceFieldsMap: Readonly<Record<string, string>> = {
  'source.ip': 'source.ip',
  'source.port': 'source.port',
  'source.domain': 'source.domain',
};

export const destinationFieldsMap: Readonly<Record<string, string>> = {
  'destination.ip': 'destination.ip',
  'destination.port': 'destination.port',
  'destination.domain': 'destination.domain',
};

export const networkFieldsMap: Readonly<Record<string, string>> = {
  'network.transport': 'network.transport',
  'network.direction': 'network.direction',
  'network.bytes': 'network.bytes',
  'network.packets': 'network.packets',
};

export const geoFieldsMap: Readonly<Record<string, string>> = {
  'geo.region_name': 'destination.geo.region_name',
  'geo.country_iso_code': 'destination.geo.country_iso_code',
};

export const eventBaseFieldsMap: Readonly<Record<string, string>> = {
  'event.action': 'event.action',
  'event.category': 'event.category',
  'event.duration': 'event.duration',
  // NOTE: This is only for the index filebeat. If you're using auditbeat, then this needs to be changed out for 'event.id': 'event.id'
  'event.id': 'suricata.eve.flow_id',
  'event.module': 'event.module',
  'event.severity': 'event.severity',
  'event.type': 'event.type',
  'event.dataset': 'event.dataset',
};

export const eventFieldsMap: Readonly<Record<string, string>> = {
  timestamp: '@timestamp',
  ...{ ...destinationFieldsMap },
  ...{ ...eventBaseFieldsMap },
  ...{ ...geoFieldsMap },
  ...{ ...hostFieldsMap },
  ...{ ...networkFieldsMap },
  ...{ ...sourceFieldsMap },
  ...{ ...suricataFieldsMap },
  ...{ ...zeekFieldsMap },
  ...{ ...httpFieldsMap },
  ...{ ...userFieldsMap },
  ...{ ...processFieldsMap },
};