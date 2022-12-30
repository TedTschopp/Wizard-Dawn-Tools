<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="es" xml:lang="es"><head>
<meta content="text/html; charset=ISO-8859-1" http-equiv="Content-Type" />
<!--
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              This file is generated from xml source: DO NOT EDIT
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      -->
<title>Gu�a R�pida de Referencia de Directivas - Servidor Apache HTTP Versi�n 2.4</title>
<link href="../style/css/manual.css" rel="stylesheet" media="all" type="text/css" title="Main stylesheet" />
<link href="../style/css/manual-loose-100pc.css" rel="alternate stylesheet" media="all" type="text/css" title="No Sidebar - Default font size" />
<link href="../style/css/manual-print.css" rel="stylesheet" media="print" type="text/css" /><link rel="stylesheet" type="text/css" href="../style/css/prettify.css" />
<script src="../style/scripts/prettify.min.js" type="text/javascript">
</script>

<link href="../images/favicon.ico" rel="shortcut icon" /></head>
<body id="directive-index">
<div id="page-header">
<p class="menu"><a href="../mod/">M�dulos</a> | <a href="../mod/directives.html">Directivas</a> | <a href="http://wiki.apache.org/httpd/FAQ">Preguntas Frecuentes</a> | <a href="../glossary.html">Glosario</a> | <a href="../sitemap.html">Mapa del sitio web</a></p>
<p class="apache">Versi�n 2.4 del Servidor HTTP Apache</p>
<img alt="" src="../images/feather.png" /></div>
<div class="up"><a href="./"><img title="&lt;-" alt="&lt;-" src="../images/left.gif" /></a></div>
<div id="path">
<a href="http://www.apache.org/">Apache</a> &gt; <a href="http://httpd.apache.org/">Servidor HTTP</a> &gt; <a href="http://httpd.apache.org/docs/">Documentaci�n</a> &gt; <a href="../">Versi�n 2.4</a> &gt; <a href="./">M�dulos</a></div>
<div id="preamble"><h1>Gu�a R�pida de Referencia de Directivas</h1>
<div class="toplang">
<p><span>Idiomas disponibles: </span><a href="../de/mod/quickreference.html" hreflang="de" rel="alternate" title="Deutsch">&nbsp;de&nbsp;</a> |
<a href="../en/mod/quickreference.html" hreflang="en" rel="alternate" title="English">&nbsp;en&nbsp;</a> |
<a href="../es/mod/quickreference.html" title="Espa�ol">&nbsp;es&nbsp;</a> |
<a href="../fr/mod/quickreference.html" hreflang="fr" rel="alternate" title="Fran�ais">&nbsp;fr&nbsp;</a> |
<a href="../ja/mod/quickreference.html" hreflang="ja" rel="alternate" title="Japanese">&nbsp;ja&nbsp;</a> |
<a href="../ko/mod/quickreference.html" hreflang="ko" rel="alternate" title="Korean">&nbsp;ko&nbsp;</a> |
<a href="../tr/mod/quickreference.html" hreflang="tr" rel="alternate" title="T�rk�e">&nbsp;tr&nbsp;</a> |
<a href="../zh-cn/mod/quickreference.html" hreflang="zh-cn" rel="alternate" title="Simplified Chinese">&nbsp;zh-cn&nbsp;</a></p>
</div>

    <p>La Gu�a R�pida de Referencia de Directivas muestra el uso, las
    opciones por defecto, el estado y el contexto de cada directiva de
    configuraci�n de Apache.  Para m�s informaci�n sobre cada
    directiva, consulte el <a href="directive-dict.html">Diccionario
    de Directivas</a>.</p>

    <p>La primera columna muestra el nombre y el uso de la directiva.
    La segunda columna muestra el valor por defecto de la directiva,
    si existe ese valor por defecto.  Si el valor por defecto es
    demasiado largo para mostrarlo, el primer car�cter va seguido de
    un signo "+".</p>

    <p>La tercera y la cuarta columna listan los contextos en los que
    la directiva puede funcionar y el estado de la directiva de
    acuerdo con las notas que detallan m�s abajo.</p>
  </div>
<div id="directive-ref"><table id="legend">
<tr><td class="letters"><span><a href="#A">&nbsp;A&nbsp;</a> | <a href="#B">&nbsp;B&nbsp;</a> | <a href="#C">&nbsp;C&nbsp;</a> | <a href="#D">&nbsp;D&nbsp;</a> | <a href="#E">&nbsp;E&nbsp;</a> | <a href="#F">&nbsp;F&nbsp;</a> | <a href="#G">&nbsp;G&nbsp;</a> | <a href="#H">&nbsp;H&nbsp;</a> | <a href="#I">&nbsp;I&nbsp;</a> | <a href="#K">&nbsp;K&nbsp;</a> | <a href="#L">&nbsp;L&nbsp;</a> | <a href="#M">&nbsp;M&nbsp;</a> | <a href="#N">&nbsp;N&nbsp;</a> | <a href="#O">&nbsp;O&nbsp;</a> | <a href="#P">&nbsp;P&nbsp;</a> | <a href="#Q">&nbsp;Q&nbsp;</a> | <a href="#R">&nbsp;R&nbsp;</a> | <a href="#S">&nbsp;S&nbsp;</a> | <a href="#T">&nbsp;T&nbsp;</a> | <a href="#U">&nbsp;U&nbsp;</a> | <a href="#V">&nbsp;V&nbsp;</a> | <a href="#W">&nbsp;W&nbsp;</a> | <a href="#X">&nbsp;X&nbsp;</a></span></td>
<td><table><tr><th>s</th><td>server config</td></tr>
<tr><th>v</th><td>virtual host</td></tr>
<tr><th>d</th><td>directorio</td></tr>
<tr><th>h</th><td>.htaccess</td></tr>
<tr><th /><td /></tr>
</table></td>
<td><table><tr><th>C</th><td>Core</td></tr>
<tr><th>M</th><td>MPM</td></tr>
<tr><th>B</th><td>Base</td></tr>
<tr><th>E</th><td>Extensi�n</td></tr>
<tr><th>X</th><td>Experimental</td></tr>
<tr><th>T</th><td>Externo</td></tr>
</table></td></tr>
</table>
<table class="qref">
<tr><td><a href="core.html#acceptfilter" id="A" name="A">AcceptFilter <var>protocol</var> <var>accept_filter</var></a></td><td></td><td>s</td><td>C</td></tr><tr><td class="descr" colspan="4">Configura mejoras para un Protocolo de Escucha de Sockets</td></tr>
<tr class="odd"><td><a href="core.html#acceptpathinfo">AcceptPathInfo On|Off|Default</a></td><td> Default </td><td>svdh</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Los recursos aceptan informaci�n sobre su ruta</td></tr>
<tr><td><a href="core.html#accessfilename">AccessFileName <var>filename</var> [<var>filename</var>] ...</a></td><td> .htaccess </td><td>sv</td><td>C</td></tr><tr><td class="descr" colspan="4">Nombre del fichero distribuido de configuraci�n</td></tr>
<tr class="odd"><td><a href="mod_actions.html#action">Action <var>action-type</var> <var>cgi-script</var> [virtual]</a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Activates a CGI script for a particular handler or
content-type</td></tr>
<tr><td><a href="mod_autoindex.html#addalt">AddAlt <var>string</var> <var>file</var> [<var>file</var>] ...</a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Alternate text to display for a file, instead of an
icon selected by filename</td></tr>
<tr class="odd"><td><a href="mod_autoindex.html#addaltbyencoding">AddAltByEncoding <var>string</var> <var>MIME-encoding</var>
[<var>MIME-encoding</var>] ...</a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Alternate text to display for a file instead of an icon
selected by MIME-encoding</td></tr>
<tr><td><a href="mod_autoindex.html#addaltbytype">AddAltByType <var>string</var> <var>MIME-type</var>
[<var>MIME-type</var>] ...</a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Alternate text to display for a file, instead of an
icon selected by MIME content-type</td></tr>
<tr class="odd"><td><a href="mod_mime.html#addcharset">AddCharset <var>charset</var> <var>extension</var>
[<var>extension</var>] ...</a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Maps the given filename extensions to the specified content
charset</td></tr>
<tr><td><a href="core.html#adddefaultcharset">AddDefaultCharset On|Off|<var>charset</var></a></td><td> Off </td><td>svdh</td><td>C</td></tr><tr><td class="descr" colspan="4">Default charset parameter to be added when a response
content-type is <code>text/plain</code> or <code>text/html</code></td></tr>
<tr class="odd"><td><a href="mod_autoindex.html#adddescription">AddDescription <var>string file</var> [<var>file</var>] ...</a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Description to display for a file</td></tr>
<tr><td><a href="mod_mime.html#addencoding">AddEncoding <var>encoding</var> <var>extension</var>
[<var>extension</var>] ...</a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Maps the given filename extensions to the specified encoding
type</td></tr>
<tr class="odd"><td><a href="mod_mime.html#addhandler">AddHandler <var>handler-name</var> <var>extension</var>
[<var>extension</var>] ...</a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Maps the filename extensions to the specified
handler</td></tr>
<tr><td><a href="mod_autoindex.html#addicon">AddIcon <var>icon</var> <var>name</var> [<var>name</var>]
...</a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Icon to display for a file selected by name</td></tr>
<tr class="odd"><td><a href="mod_autoindex.html#addiconbyencoding">AddIconByEncoding <var>icon</var> <var>MIME-encoding</var>
[<var>MIME-encoding</var>] ...</a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Icon to display next to files selected by MIME
content-encoding</td></tr>
<tr><td><a href="mod_autoindex.html#addiconbytype">AddIconByType <var>icon</var> <var>MIME-type</var>
[<var>MIME-type</var>] ...</a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Icon to display next to files selected by MIME
content-type</td></tr>
<tr class="odd"><td><a href="mod_mime.html#addinputfilter">AddInputFilter <var>filter</var>[;<var>filter</var>...]
<var>extension</var> [<var>extension</var>] ...</a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Maps filename extensions to the filters that will process
client requests</td></tr>
<tr><td><a href="mod_mime.html#addlanguage">AddLanguage <var>language-tag</var> <var>extension</var>
[<var>extension</var>] ...</a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Maps the given filename extension to the specified content
language</td></tr>
<tr class="odd"><td><a href="mod_info.html#addmoduleinfo">AddModuleInfo <var>module-name</var> <var>string</var></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Adds additional information to the module
information displayed by the server-info handler</td></tr>
<tr><td><a href="mod_mime.html#addoutputfilter">AddOutputFilter <var>filter</var>[;<var>filter</var>...]
<var>extension</var> [<var>extension</var>] ...</a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Maps filename extensions to the filters that will process
responses from the server</td></tr>
<tr class="odd"><td><a href="mod_filter.html#addoutputfilterbytype">AddOutputFilterByType <var>filter</var>[;<var>filter</var>...]
<var>media-type</var> [<var>media-type</var>] ...</a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">assigns an output filter to a particular media-type</td></tr>
<tr><td><a href="mod_mime.html#addtype">AddType <var>media-type</var> <var>extension</var>
[<var>extension</var>] ...</a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Maps the given filename extensions onto the specified content
type</td></tr>
<tr class="odd"><td><a href="mod_alias.html#alias">Alias [<var>URL-path</var>]
<var>file-path</var>|<var>directory-path</var></a></td><td></td><td>svd</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Maps URLs to filesystem locations</td></tr>
<tr><td><a href="mod_alias.html#aliasmatch">AliasMatch <var>regex</var>
<var>file-path</var>|<var>directory-path</var></a></td><td></td><td>sv</td><td>B</td></tr><tr><td class="descr" colspan="4">Maps URLs to filesystem locations using regular
expressions</td></tr>
<tr class="odd"><td><a href="mod_access_compat.html#allow"> Allow from all|<var>host</var>|env=[!]<var>env-variable</var>
[<var>host</var>|env=[!]<var>env-variable</var>] ...</a></td><td></td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Controls which hosts can access an area of the
server</td></tr>
<tr><td><a href="mod_proxy_connect.html#allowconnect">AllowCONNECT <var>port</var>[-<var>port</var>]
[<var>port</var>[-<var>port</var>]] ...</a></td><td> 443 563 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Ports that are allowed to <code>CONNECT</code> through the
proxy</td></tr>
<tr class="odd"><td><a href="core.html#allowencodedslashes">AllowEncodedSlashes On|Off</a></td><td> Off </td><td>sv</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Determines whether encoded path separators in URLs are allowed to
be passed through</td></tr>
<tr><td><a href="mod_allowmethods.html#allowmethods">AllowMethods reset|<em>HTTP-method</em>
[<em>HTTP-method</em>]...</a></td><td> reset </td><td>d</td><td>X</td></tr><tr><td class="descr" colspan="4">Restrict access to the listed HTTP methods</td></tr>
<tr class="odd"><td><a href="core.html#allowoverride">AllowOverride All|None|<var>directive-type</var>
[<var>directive-type</var>] ...</a></td><td> None (2.3.9 and lat +</td><td>d</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Types of directives that are allowed in
<code>.htaccess</code> files</td></tr>
<tr><td><a href="core.html#allowoverridelist">AllowOverrideList None|<var>directive</var>
[<var>directive-type</var>] ...</a></td><td> None </td><td>d</td><td>C</td></tr><tr><td class="descr" colspan="4">Individual directives that are allowed in
<code>.htaccess</code> files</td></tr>
<tr class="odd"><td><a href="mod_authn_anon.html#anonymous">Anonymous <var>user</var> [<var>user</var>] ...</a></td><td></td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Specifies userIDs that are allowed access without
password verification</td></tr>
<tr><td><a href="mod_authn_anon.html#anonymous_logemail">Anonymous_LogEmail On|Off</a></td><td> On </td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">Sets whether the password entered will be logged in the
error log</td></tr>
<tr class="odd"><td><a href="mod_authn_anon.html#anonymous_mustgiveemail">Anonymous_MustGiveEmail On|Off</a></td><td> On </td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Specifies whether blank passwords are allowed</td></tr>
<tr><td><a href="mod_authn_anon.html#anonymous_nouserid">Anonymous_NoUserID On|Off</a></td><td> Off </td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">Sets whether the userID field may be empty</td></tr>
<tr class="odd"><td><a href="mod_authn_anon.html#anonymous_verifyemail">Anonymous_VerifyEmail On|Off</a></td><td> Off </td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Sets whether to check the password field for a correctly
formatted email address</td></tr>
<tr><td><a href="event.html#asyncrequestworkerfactor">AsyncRequestWorkerFactor <var>factor</var></a></td><td></td><td>s</td><td>M</td></tr><tr><td class="descr" colspan="4">Limit concurrent connections per process</td></tr>
<tr class="odd"><td><a href="mod_auth_basic.html#authbasicauthoritative">AuthBasicAuthoritative On|Off</a></td><td> On </td><td>dh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Sets whether authorization and authentication are passed to
lower level modules</td></tr>
<tr><td><a href="mod_auth_basic.html#authbasicfake">AuthBasicFake off|<var>username</var> [<var>password</var>]</a></td><td></td><td>dh</td><td>B</td></tr><tr><td class="descr" colspan="4">Fake basic authentication using the given expressions for
username and password</td></tr>
<tr class="odd"><td><a href="mod_auth_basic.html#authbasicprovider">AuthBasicProvider <var>provider-name</var>
[<var>provider-name</var>] ...</a></td><td> file </td><td>dh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Sets the authentication provider(s) for this location</td></tr>
<tr><td><a href="mod_auth_basic.html#authbasicusedigestalgorithm">AuthBasicUseDigestAlgorithm MD5|Off</a></td><td> Off </td><td>dh</td><td>B</td></tr><tr><td class="descr" colspan="4">Check passwords against the authentication providers as if
Digest Authentication was in force instead of Basic Authentication.
</td></tr>
<tr class="odd"><td><a href="mod_authn_dbd.html#authdbduserpwquery">AuthDBDUserPWQuery <var>query</var></a></td><td></td><td>d</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">SQL query to look up a password for a user</td></tr>
<tr><td><a href="mod_authn_dbd.html#authdbduserrealmquery">AuthDBDUserRealmQuery <var>query</var></a></td><td></td><td>d</td><td>E</td></tr><tr><td class="descr" colspan="4">SQL query to look up a password hash for a user and realm.
</td></tr>
<tr class="odd"><td><a href="mod_authz_dbm.html#authdbmgroupfile">AuthDBMGroupFile <var>file-path</var></a></td><td></td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Sets the name of the database file containing the list
of user groups for authorization</td></tr>
<tr><td><a href="mod_authn_dbm.html#authdbmtype">AuthDBMType default|SDBM|GDBM|NDBM|DB</a></td><td> default </td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">Sets the type of database file that is used to
store passwords</td></tr>
<tr class="odd"><td><a href="mod_authn_dbm.html#authdbmuserfile">AuthDBMUserFile <var>file-path</var></a></td><td></td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Sets the name of a database file containing the list of users and
passwords for authentication</td></tr>
<tr><td><a href="mod_auth_digest.html#authdigestalgorithm">AuthDigestAlgorithm MD5|MD5-sess</a></td><td> MD5 </td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">Selects the algorithm used to calculate the challenge and
response hashes in digest authentication</td></tr>
<tr class="odd"><td><a href="mod_auth_digest.html#authdigestdomain">AuthDigestDomain <var>URI</var> [<var>URI</var>] ...</a></td><td></td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">URIs that are in the same protection space for digest
authentication</td></tr>
<tr><td><a href="mod_auth_digest.html#authdigestnoncelifetime">AuthDigestNonceLifetime <var>seconds</var></a></td><td> 300 </td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">How long the server nonce is valid</td></tr>
<tr class="odd"><td><a href="mod_auth_digest.html#authdigestprovider">AuthDigestProvider <var>provider-name</var>
[<var>provider-name</var>] ...</a></td><td> file </td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Sets the authentication provider(s) for this location</td></tr>
<tr><td><a href="mod_auth_digest.html#authdigestqop">AuthDigestQop none|auth|auth-int [auth|auth-int]</a></td><td> auth </td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">Determines the quality-of-protection to use in digest
authentication</td></tr>
<tr class="odd"><td><a href="mod_auth_digest.html#authdigestshmemsize">AuthDigestShmemSize <var>size</var></a></td><td> 1000 </td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">The amount of shared memory to allocate for keeping track
of clients</td></tr>
<tr><td><a href="mod_auth_form.html#authformauthoritative">AuthFormAuthoritative On|Off</a></td><td> On </td><td>dh</td><td>B</td></tr><tr><td class="descr" colspan="4">Sets whether authorization and authentication are passed to
lower level modules</td></tr>
<tr class="odd"><td><a href="mod_auth_form.html#authformbody">AuthFormBody <var>fieldname</var></a></td><td></td><td>d</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">The name of a form field carrying the body of the request to attempt on successful login</td></tr>
<tr><td><a href="mod_auth_form.html#authformdisablenostore">AuthFormDisableNoStore <var>On|Off</var></a></td><td> Off </td><td>d</td><td>B</td></tr><tr><td class="descr" colspan="4">Disable the CacheControl no-store header on the login page</td></tr>
<tr class="odd"><td><a href="mod_auth_form.html#authformfakebasicauth">AuthFormFakeBasicAuth <var>On|Off</var></a></td><td> Off </td><td>d</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Fake a Basic Authentication header</td></tr>
<tr><td><a href="mod_auth_form.html#authformlocation">AuthFormLocation <var>fieldname</var></a></td><td></td><td>d</td><td>B</td></tr><tr><td class="descr" colspan="4">The name of a form field carrying a URL to redirect to on successful login</td></tr>
<tr class="odd"><td><a href="mod_auth_form.html#authformloginrequiredlocation">AuthFormLoginRequiredLocation <var>url</var></a></td><td></td><td>d</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">The URL of the page to be redirected to should login be required</td></tr>
<tr><td><a href="mod_auth_form.html#authformloginsuccesslocation">AuthFormLoginSuccessLocation <var>url</var></a></td><td></td><td>d</td><td>B</td></tr><tr><td class="descr" colspan="4">The URL of the page to be redirected to should login be successful</td></tr>
<tr class="odd"><td><a href="mod_auth_form.html#authformlogoutlocation">AuthFormLogoutLocation <var>uri</var></a></td><td></td><td>d</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">The URL to redirect to after a user has logged out</td></tr>
<tr><td><a href="mod_auth_form.html#authformmethod">AuthFormMethod <var>fieldname</var></a></td><td></td><td>d</td><td>B</td></tr><tr><td class="descr" colspan="4">The name of a form field carrying the method of the request to attempt on successful login</td></tr>
<tr class="odd"><td><a href="mod_auth_form.html#authformmimetype">AuthFormMimetype <var>fieldname</var></a></td><td></td><td>d</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">The name of a form field carrying the mimetype of the body of the request to attempt on successful login</td></tr>
<tr><td><a href="mod_auth_form.html#authformpassword">AuthFormPassword <var>fieldname</var></a></td><td></td><td>d</td><td>B</td></tr><tr><td class="descr" colspan="4">The name of a form field carrying the login password</td></tr>
<tr class="odd"><td><a href="mod_auth_form.html#authformprovider">AuthFormProvider <var>provider-name</var>
[<var>provider-name</var>] ...</a></td><td> file </td><td>dh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Sets the authentication provider(s) for this location</td></tr>
<tr><td><a href="mod_auth_form.html#authformsitepassphrase">AuthFormSitePassphrase <var>secret</var></a></td><td></td><td>d</td><td>B</td></tr><tr><td class="descr" colspan="4">Bypass authentication checks for high traffic sites</td></tr>
<tr class="odd"><td><a href="mod_auth_form.html#authformsize">AuthFormSize <var>size</var></a></td><td></td><td>d</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">The largest size of the form in bytes that will be parsed for the login details</td></tr>
<tr><td><a href="mod_auth_form.html#authformusername">AuthFormUsername <var>fieldname</var></a></td><td></td><td>d</td><td>B</td></tr><tr><td class="descr" colspan="4">The name of a form field carrying the login username</td></tr>
<tr class="odd"><td><a href="mod_authz_groupfile.html#authgroupfile">AuthGroupFile <var>file-path</var></a></td><td></td><td>dh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Sets the name of a text file containing the list
of user groups for authorization</td></tr>
<tr><td><a href="mod_authnz_ldap.html#authldapauthorizeprefix">AuthLDAPAuthorizePrefix <em>prefix</em></a></td><td> AUTHORIZE_ </td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">Specifies the prefix for environment variables set during
authorization</td></tr>
<tr class="odd"><td><a href="mod_authnz_ldap.html#authldapbindauthoritative">AuthLDAPBindAuthoritative off|on</a></td><td> on </td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Determines if other authentication providers are used when a user can be mapped to a DN but the server cannot successfully bind with the user's credentials.</td></tr>
<tr><td><a href="mod_authnz_ldap.html#authldapbinddn">AuthLDAPBindDN <em>distinguished-name</em></a></td><td></td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">Optional DN to use in binding to the LDAP server</td></tr>
<tr class="odd"><td><a href="mod_authnz_ldap.html#authldapbindpassword">AuthLDAPBindPassword <em>password</em></a></td><td></td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Password used in conjunction with the bind DN</td></tr>
<tr><td><a href="mod_authnz_ldap.html#authldapcharsetconfig">AuthLDAPCharsetConfig <em>file-path</em></a></td><td></td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Language to charset conversion configuration file</td></tr>
<tr class="odd"><td><a href="mod_authnz_ldap.html#authldapcompareasuser">AuthLDAPCompareAsUser on|off</a></td><td> off </td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Use the authenticated user's credentials to perform authorization comparisons</td></tr>
<tr><td><a href="mod_authnz_ldap.html#authldapcomparednonserver">AuthLDAPCompareDNOnServer on|off</a></td><td> on </td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">Use the LDAP server to compare the DNs</td></tr>
<tr class="odd"><td><a href="mod_authnz_ldap.html#authldapdereferencealiases">AuthLDAPDereferenceAliases never|searching|finding|always</a></td><td> always </td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">When will the module de-reference aliases</td></tr>
<tr><td><a href="mod_authnz_ldap.html#authldapgroupattribute">AuthLDAPGroupAttribute <em>attribute</em></a></td><td> member uniquemember +</td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">LDAP attributes used to identify the user members of
groups.</td></tr>
<tr class="odd"><td><a href="mod_authnz_ldap.html#authldapgroupattributeisdn">AuthLDAPGroupAttributeIsDN on|off</a></td><td> on </td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Use the DN of the client username when checking for
group membership</td></tr>
<tr><td><a href="mod_authnz_ldap.html#authldapinitialbindasuser">AuthLDAPInitialBindAsUser off|on</a></td><td> off </td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">Determines if the server does the initial DN lookup using the basic authentication users'
own username, instead of anonymously or with hard-coded credentials for the server</td></tr>
<tr class="odd"><td><a href="mod_authnz_ldap.html#authldapinitialbindpattern">AuthLDAPInitialBindPattern <em><var>regex</var> <var>substitution</var></em></a></td><td> (.*) $1 (remote use +</td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Specifies the transformation of the basic authentication username to be used when binding to the LDAP server
to perform a DN lookup</td></tr>
<tr><td><a href="mod_authnz_ldap.html#authldapmaxsubgroupdepth">AuthLDAPMaxSubGroupDepth <var>Number</var></a></td><td> 10 </td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">Specifies the maximum sub-group nesting depth that will be
evaluated before the user search is discontinued.</td></tr>
<tr class="odd"><td><a href="mod_authnz_ldap.html#authldapremoteuserattribute">AuthLDAPRemoteUserAttribute uid</a></td><td></td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Use the value of the attribute returned during the user
query to set the REMOTE_USER environment variable</td></tr>
<tr><td><a href="mod_authnz_ldap.html#authldapremoteuserisdn">AuthLDAPRemoteUserIsDN on|off</a></td><td> off </td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">Use the DN of the client username to set the REMOTE_USER
environment variable</td></tr>
<tr class="odd"><td><a href="mod_authnz_ldap.html#authldapsearchasuser">AuthLDAPSearchAsUser on|off</a></td><td> off </td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Use the authenticated user's credentials to perform authorization searches</td></tr>
<tr><td><a href="mod_authnz_ldap.html#authldapsubgroupattribute">AuthLDAPSubGroupAttribute <em>attribute</em></a></td><td></td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">Specifies the attribute labels, one value per
directive line, used to distinguish the members of the current group that
are groups.</td></tr>
<tr class="odd"><td><a href="mod_authnz_ldap.html#authldapsubgroupclass">AuthLDAPSubGroupClass <em>LdapObjectClass</em></a></td><td> groupOfNames groupO +</td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Specifies which LDAP objectClass values identify directory
objects that are groups during sub-group processing.</td></tr>
<tr><td><a href="mod_authnz_ldap.html#authldapurl">AuthLDAPUrl <em>url [NONE|SSL|TLS|STARTTLS]</em></a></td><td></td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">URL specifying the LDAP search parameters</td></tr>
<tr class="odd"><td><a href="mod_authz_core.html#authmerging">AuthMerging Off | And | Or</a></td><td> Off </td><td>dh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Controls the manner in which each configuration section's
authorization logic is combined with that of preceding configuration
sections.</td></tr>
<tr><td><a href="mod_authn_core.html#authname">AuthName <var>auth-domain</var></a></td><td></td><td>dh</td><td>B</td></tr><tr><td class="descr" colspan="4">Authorization realm for use in HTTP
authentication</td></tr>
<tr class="odd"><td><a href="mod_authn_socache.html#authncachecontext">AuthnCacheContext <var>directory|server|custom-string</var></a></td><td></td><td>d</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Specify a context string for use in the cache key</td></tr>
<tr><td><a href="mod_authn_socache.html#authncacheenable">AuthnCacheEnable</a></td><td></td><td>s</td><td>B</td></tr><tr><td class="descr" colspan="4">Enable Authn caching configured anywhere</td></tr>
<tr class="odd"><td><a href="mod_authn_socache.html#authncacheprovidefor">AuthnCacheProvideFor <var>authn-provider</var> [...]</a></td><td></td><td>dh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Specify which authn provider(s) to cache for</td></tr>
<tr><td><a href="mod_authn_socache.html#authncachesocache">AuthnCacheSOCache <var>provider-name[:provider-args]</var></a></td><td></td><td>s</td><td>B</td></tr><tr><td class="descr" colspan="4">Select socache backend provider to use</td></tr>
<tr class="odd"><td><a href="mod_authn_socache.html#authncachetimeout">AuthnCacheTimeout <var>timeout</var> (seconds)</a></td><td></td><td>dh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Set a timeout for cache entries</td></tr>
<tr><td><a href="mod_authn_core.html#authnprovideralias">&lt;AuthnProviderAlias <var>baseProvider Alias</var>&gt;
... &lt;/AuthnProviderAlias&gt;</a></td><td></td><td>s</td><td>B</td></tr><tr><td class="descr" colspan="4">Enclose a group of directives that represent an
extension of a base authentication provider and referenced by
the specified alias</td></tr>
<tr class="odd"><td><a href="mod_authnz_fcgi.html#authnzfcgicheckauthnprovider">AuthnzFcgiCheckAuthnProvider <em>provider-name</em>|<code>None</code>
<em>option</em> ...</a></td><td></td><td>d</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Enables a FastCGI application to handle the check_authn
authentication hook.</td></tr>
<tr><td><a href="mod_authnz_fcgi.html#authnzfcgidefineprovider">AuthnzFcgiDefineProvider <em>type</em> <em>provider-name</em>
<em>backend-address</em></a></td><td></td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Defines a FastCGI application as a provider for
authentication and/or authorization</td></tr>
<tr class="odd"><td><a href="mod_authn_core.html#authtype">AuthType None|Basic|Digest|Form</a></td><td></td><td>dh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Type of user authentication</td></tr>
<tr><td><a href="mod_authn_file.html#authuserfile">AuthUserFile <var>file-path</var></a></td><td></td><td>dh</td><td>B</td></tr><tr><td class="descr" colspan="4">Sets the name of a text file containing the list of users and
passwords for authentication</td></tr>
<tr class="odd"><td><a href="mod_authz_dbd.html#authzdbdlogintoreferer">AuthzDBDLoginToReferer On|Off</a></td><td> Off </td><td>d</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Determines whether to redirect the Client to the Referring
page on successful login or logout if a <code>Referer</code> request
header is present</td></tr>
<tr><td><a href="mod_authz_dbd.html#authzdbdquery">AuthzDBDQuery <var>query</var></a></td><td></td><td>d</td><td>E</td></tr><tr><td class="descr" colspan="4">Specify the SQL Query for the required operation</td></tr>
<tr class="odd"><td><a href="mod_authz_dbd.html#authzdbdredirectquery">AuthzDBDRedirectQuery <var>query</var></a></td><td></td><td>d</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Specify a query to look up a login page for the user</td></tr>
<tr><td><a href="mod_authz_dbm.html#authzdbmtype">AuthzDBMType default|SDBM|GDBM|NDBM|DB</a></td><td> default </td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">Sets the type of database file that is used to
store list of user groups</td></tr>
<tr class="odd"><td><a href="mod_authz_core.html#authzprovideralias">&lt;AuthzProviderAlias <var>baseProvider Alias Require-Parameters</var>&gt;
... &lt;/AuthzProviderAlias&gt;
</a></td><td></td><td>s</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Enclose a group of directives that represent an
extension of a base authorization provider and referenced by the specified
alias</td></tr>
<tr><td><a href="mod_authz_core.html#authzsendforbiddenonfailure">AuthzSendForbiddenOnFailure On|Off</a></td><td> Off </td><td>dh</td><td>B</td></tr><tr><td class="descr" colspan="4">Send '403 FORBIDDEN' instead of '401 UNAUTHORIZED' if
authentication succeeds but authorization fails
</td></tr>
<tr class="odd"><td><a href="mod_proxy.html#balancergrowth" id="B" name="B">BalancerGrowth <var>#</var></a></td><td> 5 </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Number of additional Balancers that can be added Post-configuration</td></tr>
<tr><td><a href="mod_proxy.html#balancerinherit">BalancerInherit On|Off</a></td><td> On </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Inherit ProxyPassed Balancers/Workers from the main server</td></tr>
<tr class="odd"><td><a href="mod_proxy.html#balancermember">BalancerMember [<var>balancerurl</var>] <var>url</var> [<var>key=value [key=value ...]]</var></a></td><td></td><td>d</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Add a member to a load balancing group</td></tr>
<tr><td><a href="mod_proxy.html#balancerpersist">BalancerPersist On|Off</a></td><td> Off </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Attempt to persist changes made by the Balancer Manager across restarts.</td></tr>
<tr class="odd"><td><a href="mod_brotli.html#brotlialteretag">BrotliAlterETag AddSuffix|NoChange|Remove</a></td><td> AddSuffix </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">How the outgoing ETag header should be modified during compression</td></tr>
<tr><td><a href="mod_brotli.html#brotlicompressionmaxinputblock">BrotliCompressionMaxInputBlock <var>value</var></a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Maximum input block size</td></tr>
<tr class="odd"><td><a href="mod_brotli.html#brotlicompressionquality">BrotliCompressionQuality <var>value</var></a></td><td> 5 </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Compression quality</td></tr>
<tr><td><a href="mod_brotli.html#brotlicompressionwindow">BrotliCompressionWindow <var>value</var></a></td><td> 18 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Brotli sliding compression window size</td></tr>
<tr class="odd"><td><a href="mod_brotli.html#brotlifilternote">BrotliFilterNote [<var>type</var>] <var>notename</var></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Places the compression ratio in a note for logging</td></tr>
<tr><td><a href="mod_setenvif.html#browsermatch">BrowserMatch <em>regex [!]env-variable</em>[=<em>value</em>]
[[!]<em>env-variable</em>[=<em>value</em>]] ...</a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Sets environment variables conditional on HTTP User-Agent
</td></tr>
<tr class="odd"><td><a href="mod_setenvif.html#browsermatchnocase">BrowserMatchNoCase  <em>regex [!]env-variable</em>[=<em>value</em>]
    [[!]<em>env-variable</em>[=<em>value</em>]] ...</a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Sets environment variables conditional on User-Agent without
respect to case</td></tr>
<tr><td><a href="mod_log_config.html#bufferedlogs">BufferedLogs On|Off</a></td><td> Off </td><td>s</td><td>B</td></tr><tr><td class="descr" colspan="4">Buffer log entries in memory before writing to disk</td></tr>
<tr class="odd"><td><a href="mod_buffer.html#buffersize">BufferSize integer</a></td><td> 131072 </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Maximum size in bytes to buffer by the buffer filter</td></tr>
<tr><td><a href="mod_cache.html#cachedefaultexpire" id="C" name="C">CacheDefaultExpire <var>seconds</var></a></td><td> 3600 (one hour) </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">The default duration to cache a document when no expiry date is specified.</td></tr>
<tr class="odd"><td><a href="mod_cache.html#cachedetailheader">CacheDetailHeader <var>on|off</var></a></td><td> off </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Add an X-Cache-Detail header to the response.</td></tr>
<tr><td><a href="mod_cache_disk.html#cachedirlength">CacheDirLength <var>length</var></a></td><td> 2 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">The number of characters in subdirectory names</td></tr>
<tr class="odd"><td><a href="mod_cache_disk.html#cachedirlevels">CacheDirLevels <var>levels</var></a></td><td> 2 </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">The number of levels of subdirectories in the
cache.</td></tr>
<tr><td><a href="mod_cache.html#cachedisable">CacheDisable <var>url-string</var> | <var>on</var></a></td><td></td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Disable caching of specified URLs</td></tr>
<tr class="odd"><td><a href="mod_cache.html#cacheenable">CacheEnable <var>cache_type</var> [<var>url-string</var>]</a></td><td></td><td>svd</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Enable caching of specified URLs using a specified storage
manager</td></tr>
<tr><td><a href="mod_file_cache.html#cachefile">CacheFile <var>file-path</var> [<var>file-path</var>] ...</a></td><td></td><td>s</td><td>X</td></tr><tr><td class="descr" colspan="4">Cache a list of file handles at startup time</td></tr>
<tr class="odd"><td><a href="mod_cache.html#cacheheader">CacheHeader <var>on|off</var></a></td><td> off </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Add an X-Cache header to the response.</td></tr>
<tr><td><a href="mod_cache.html#cacheignorecachecontrol">CacheIgnoreCacheControl On|Off</a></td><td> Off </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Ignore request to not serve cached content to client</td></tr>
<tr class="odd"><td><a href="mod_cache.html#cacheignoreheaders">CacheIgnoreHeaders <var>header-string</var> [<var>header-string</var>] ...</a></td><td> None </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Do not store the given HTTP header(s) in the cache.
</td></tr>
<tr><td><a href="mod_cache.html#cacheignorenolastmod">CacheIgnoreNoLastMod On|Off</a></td><td> Off </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Ignore the fact that a response has no Last Modified
header.</td></tr>
<tr class="odd"><td><a href="mod_cache.html#cacheignorequerystring">CacheIgnoreQueryString On|Off</a></td><td> Off </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Ignore query string when caching</td></tr>
<tr><td><a href="mod_cache.html#cacheignoreurlsessionidentifiers">CacheIgnoreURLSessionIdentifiers <var>identifier</var> [<var>identifier</var>] ...</a></td><td> None </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Ignore defined session identifiers encoded in the URL when caching
</td></tr>
<tr class="odd"><td><a href="mod_cache.html#cachekeybaseurl">CacheKeyBaseURL <var>URL</var></a></td><td> http://example.com </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Override the base URL of reverse proxied cache keys.</td></tr>
<tr><td><a href="mod_cache.html#cachelastmodifiedfactor">CacheLastModifiedFactor <var>float</var></a></td><td> 0.1 </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">The factor used to compute an expiry date based on the
LastModified date.</td></tr>
<tr class="odd"><td><a href="mod_cache.html#cachelock">CacheLock <var>on|off</var></a></td><td> off </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Enable the thundering herd lock.</td></tr>
<tr><td><a href="mod_cache.html#cachelockmaxage">CacheLockMaxAge <var>integer</var></a></td><td> 5 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Set the maximum possible age of a cache lock.</td></tr>
<tr class="odd"><td><a href="mod_cache.html#cachelockpath">CacheLockPath <var>directory</var></a></td><td> /tmp/mod_cache-lock +</td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Set the lock path directory.</td></tr>
<tr><td><a href="mod_cache.html#cachemaxexpire">CacheMaxExpire <var>seconds</var></a></td><td> 86400 (one day) </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">The maximum time in seconds to cache a document</td></tr>
<tr class="odd"><td><a href="mod_cache_disk.html#cachemaxfilesize">CacheMaxFileSize <var>bytes</var></a></td><td> 1000000 </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">The maximum size (in bytes) of a document to be placed in the
cache</td></tr>
<tr><td><a href="mod_cache.html#cacheminexpire">CacheMinExpire <var>seconds</var></a></td><td> 0 </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">The minimum time in seconds to cache a document</td></tr>
<tr class="odd"><td><a href="mod_cache_disk.html#cacheminfilesize">CacheMinFileSize <var>bytes</var></a></td><td> 1 </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">The minimum size (in bytes) of a document to be placed in the
cache</td></tr>
<tr><td><a href="mod_negotiation.html#cachenegotiateddocs">CacheNegotiatedDocs On|Off</a></td><td> Off </td><td>sv</td><td>B</td></tr><tr><td class="descr" colspan="4">Allows content-negotiated documents to be
cached by proxy servers</td></tr>
<tr class="odd"><td><a href="mod_cache.html#cachequickhandler">CacheQuickHandler <var>on|off</var></a></td><td> on </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Run the cache from the quick handler.</td></tr>
<tr><td><a href="mod_cache_disk.html#cachereadsize">CacheReadSize <var>bytes</var></a></td><td> 0 </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">The minimum size (in bytes) of the document to read and be cached
  before sending the data downstream</td></tr>
<tr class="odd"><td><a href="mod_cache_disk.html#cachereadtime">CacheReadTime <var>milliseconds</var></a></td><td> 0 </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">The minimum time (in milliseconds) that should elapse while reading
  before data is sent downstream</td></tr>
<tr><td><a href="mod_cache_disk.html#cacheroot">CacheRoot <var>directory</var></a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">The directory root under which cache files are
stored</td></tr>
<tr class="odd"><td><a href="mod_cache_socache.html#cachesocache">CacheSocache <var>type[:args]</var></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">The shared object cache implementation to use</td></tr>
<tr><td><a href="mod_cache_socache.html#cachesocachemaxsize">CacheSocacheMaxSize <var>bytes</var></a></td><td> 102400 </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">The maximum size (in bytes) of an entry to be placed in the
cache</td></tr>
<tr class="odd"><td><a href="mod_cache_socache.html#cachesocachemaxtime">CacheSocacheMaxTime <var>seconds</var></a></td><td> 86400 </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">The maximum time (in seconds) for a document to be placed in the
cache</td></tr>
<tr><td><a href="mod_cache_socache.html#cachesocachemintime">CacheSocacheMinTime <var>seconds</var></a></td><td> 600 </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">The minimum time (in seconds) for a document to be placed in the
cache</td></tr>
<tr class="odd"><td><a href="mod_cache_socache.html#cachesocachereadsize">CacheSocacheReadSize <var>bytes</var></a></td><td> 0 </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">The minimum size (in bytes) of the document to read and be cached
  before sending the data downstream</td></tr>
<tr><td><a href="mod_cache_socache.html#cachesocachereadtime">CacheSocacheReadTime <var>milliseconds</var></a></td><td> 0 </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">The minimum time (in milliseconds) that should elapse while reading
  before data is sent downstream</td></tr>
<tr class="odd"><td><a href="mod_cache.html#cachestaleonerror">CacheStaleOnError <var>on|off</var></a></td><td> on </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Serve stale content in place of 5xx responses.</td></tr>
<tr><td><a href="mod_cache.html#cachestoreexpired">CacheStoreExpired On|Off</a></td><td> Off </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Attempt to cache responses that the server reports as expired</td></tr>
<tr class="odd"><td><a href="mod_cache.html#cachestorenostore">CacheStoreNoStore On|Off</a></td><td> Off </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Attempt to cache requests or responses that have been marked as no-store.</td></tr>
<tr><td><a href="mod_cache.html#cachestoreprivate">CacheStorePrivate On|Off</a></td><td> Off </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Attempt to cache responses that the server has marked as private</td></tr>
<tr class="odd"><td><a href="mod_cgid.html#cgidscripttimeout">CGIDScriptTimeout <var>time</var>[s|ms]</a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">The length of time to wait for more output from the
CGI program</td></tr>
<tr><td><a href="core.html#cgimapextension">CGIMapExtension <var>cgi-path</var> <var>.extension</var></a></td><td></td><td>dh</td><td>C</td></tr><tr><td class="descr" colspan="4">Technique for locating the interpreter for CGI
scripts</td></tr>
<tr class="odd"><td><a href="core.html#cgipassauth">CGIPassAuth On|Off</a></td><td> Off </td><td>dh</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Enables passing HTTP authorization headers to scripts as CGI
variables</td></tr>
<tr><td><a href="core.html#cgivar">CGIVar <var>variable</var> <var>rule</var></a></td><td></td><td>dh</td><td>C</td></tr><tr><td class="descr" colspan="4">Controls how some CGI variables are set</td></tr>
<tr class="odd"><td><a href="mod_charset_lite.html#charsetdefault">CharsetDefault <var>charset</var></a></td><td></td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Charset to translate into</td></tr>
<tr><td><a href="mod_charset_lite.html#charsetoptions">CharsetOptions <var>option</var> [<var>option</var>] ...</a></td><td> ImplicitAdd </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Configures charset translation behavior</td></tr>
<tr class="odd"><td><a href="mod_charset_lite.html#charsetsourceenc">CharsetSourceEnc <var>charset</var></a></td><td></td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Source charset of files</td></tr>
<tr><td><a href="mod_speling.html#checkcaseonly">CheckCaseOnly on|off</a></td><td> Off </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Limits the action of the speling module to case corrections</td></tr>
<tr class="odd"><td><a href="mod_speling.html#checkspelling">CheckSpelling on|off</a></td><td> Off </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Enables the spelling
module</td></tr>
<tr><td><a href="mod_unixd.html#chrootdir">ChrootDir <var>/path/to/directory</var></a></td><td></td><td>s</td><td>B</td></tr><tr><td class="descr" colspan="4">Directory for apache to run chroot(8) after startup.</td></tr>
<tr class="odd"><td><a href="core.html#contentdigest">ContentDigest On|Off</a></td><td> Off </td><td>svdh</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Enables the generation of <code>Content-MD5</code> HTTP Response
headers</td></tr>
<tr><td><a href="mod_usertrack.html#cookiedomain">CookieDomain <em>domain</em></a></td><td></td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">The domain to which the tracking cookie applies</td></tr>
<tr class="odd"><td><a href="mod_usertrack.html#cookieexpires">CookieExpires <em>expiry-period</em></a></td><td></td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Expiry time for the tracking cookie</td></tr>
<tr><td><a href="mod_usertrack.html#cookiename">CookieName <em>token</em></a></td><td> Apache </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Name of the tracking cookie</td></tr>
<tr class="odd"><td><a href="mod_usertrack.html#cookiestyle">CookieStyle
    Netscape|Cookie|Cookie2|RFC2109|RFC2965</a></td><td> Netscape </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Format of the cookie header field</td></tr>
<tr><td><a href="mod_usertrack.html#cookietracking">CookieTracking on|off</a></td><td> off </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Enables tracking cookie</td></tr>
<tr class="odd"><td><a href="mpm_common.html#coredumpdirectory">CoreDumpDirectory <var>directory</var></a></td><td></td><td>s</td><td>M</td></tr><tr class="odd"><td class="descr" colspan="4">Directory where Apache HTTP Server attempts to
switch before dumping core</td></tr>
<tr><td><a href="mod_log_config.html#customlog">CustomLog  <var>file</var>|<var>pipe</var>
<var>format</var>|<var>nickname</var>
[env=[!]<var>environment-variable</var>|
expr=<var>expression</var>]</a></td><td></td><td>sv</td><td>B</td></tr><tr><td class="descr" colspan="4">Sets filename and format of log file</td></tr>
<tr class="odd"><td><a href="mod_dav.html#dav" id="D" name="D">Dav On|Off|<var>provider-name</var></a></td><td> Off </td><td>d</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Enable WebDAV HTTP methods</td></tr>
<tr><td><a href="mod_dav.html#davdepthinfinity">DavDepthInfinity on|off</a></td><td> off </td><td>svd</td><td>E</td></tr><tr><td class="descr" colspan="4">Allow PROPFIND, Depth: Infinity requests</td></tr>
<tr class="odd"><td><a href="mod_dav_lock.html#davgenericlockdb">DavGenericLockDB <var>file-path</var></a></td><td></td><td>svd</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Location of the DAV lock database</td></tr>
<tr><td><a href="mod_dav_fs.html#davlockdb">DavLockDB <var>file-path</var></a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Location of the DAV lock database</td></tr>
<tr class="odd"><td><a href="mod_dav.html#davmintimeout">DavMinTimeout <var>seconds</var></a></td><td> 0 </td><td>svd</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Minimum amount of time the server holds a lock on
a DAV resource</td></tr>
<tr><td><a href="mod_dbd.html#dbdexptime">DBDExptime <var>time-in-seconds</var></a></td><td> 300 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Keepalive time for idle connections</td></tr>
<tr class="odd"><td><a href="mod_dbd.html#dbdinitsql">DBDInitSQL <var>"SQL statement"</var></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Execute an SQL statement after connecting to a database</td></tr>
<tr><td><a href="mod_dbd.html#dbdkeep">DBDKeep <var>number</var></a></td><td> 2 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Maximum sustained number of connections</td></tr>
<tr class="odd"><td><a href="mod_dbd.html#dbdmax">DBDMax <var>number</var></a></td><td> 10 </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Maximum number of connections</td></tr>
<tr><td><a href="mod_dbd.html#dbdmin">DBDMin <var>number</var></a></td><td> 1 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Minimum number of connections</td></tr>
<tr class="odd"><td><a href="mod_dbd.html#dbdparams">DBDParams
<var>param1</var>=<var>value1</var>[,<var>param2</var>=<var>value2</var>]</a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Parameters for database connection</td></tr>
<tr><td><a href="mod_dbd.html#dbdpersist">DBDPersist On|Off</a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Whether to use persistent connections</td></tr>
<tr class="odd"><td><a href="mod_dbd.html#dbdpreparesql">DBDPrepareSQL <var>"SQL statement"</var> <var>label</var></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Define an SQL prepared statement</td></tr>
<tr><td><a href="mod_dbd.html#dbdriver">DBDriver <var>name</var></a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Specify an SQL driver</td></tr>
<tr class="odd"><td><a href="mod_autoindex.html#defaulticon">DefaultIcon <var>url-path</var></a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Icon to display for files when no specific icon is
configured</td></tr>
<tr><td><a href="mod_mime.html#defaultlanguage">DefaultLanguage <var>language-tag</var></a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Defines a default language-tag to be sent in the Content-Language
header field for all resources in the current context that have not been
assigned a language-tag by some other means.</td></tr>
<tr class="odd"><td><a href="core.html#defaultruntimedir">DefaultRuntimeDir <var>directory-path</var></a></td><td> DEFAULT_REL_RUNTIME +</td><td>s</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Base directory for the server run-time files</td></tr>
<tr><td><a href="core.html#defaulttype">DefaultType <var>media-type|none</var></a></td><td> none </td><td>svdh</td><td>C</td></tr><tr><td class="descr" colspan="4">This directive has no effect other than to emit warnings
if the value is not <code>none</code>. In prior versions, DefaultType
would specify a default media type to assign to response content for
which no other media type configuration could be found.
</td></tr>
<tr class="odd"><td><a href="core.html#define">Define <var>parameter-name</var></a></td><td></td><td>s</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Define the existence of a variable</td></tr>
<tr><td><a href="mod_deflate.html#deflatebuffersize">DeflateBufferSize <var>value</var></a></td><td> 8096 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Fragment size to be compressed at one time by zlib</td></tr>
<tr class="odd"><td><a href="mod_deflate.html#deflatecompressionlevel">DeflateCompressionLevel <var>value</var></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">How much compression do we apply to the output</td></tr>
<tr><td><a href="mod_deflate.html#deflatefilternote">DeflateFilterNote [<var>type</var>] <var>notename</var></a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Places the compression ratio in a note for logging</td></tr>
<tr class="odd"><td><a href="mod_deflate.html#deflateinflatelimitrequestbody">DeflateInflateLimitRequestBody<var>value</var></a></td><td></td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Maximum size of inflated request bodies</td></tr>
<tr><td><a href="mod_deflate.html#deflateinflateratioburst">DeflateInflateRatioBurst <var>value</var></a></td><td></td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Maximum number of times the inflation ratio for request bodies 
             can be crossed</td></tr>
<tr class="odd"><td><a href="mod_deflate.html#deflateinflateratiolimit">DeflateInflateRatioLimit <var>value</var></a></td><td></td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Maximum inflation ratio for request bodies</td></tr>
<tr><td><a href="mod_deflate.html#deflatememlevel">DeflateMemLevel <var>value</var></a></td><td> 9 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">How much memory should be used by zlib for compression</td></tr>
<tr class="odd"><td><a href="mod_deflate.html#deflatewindowsize">DeflateWindowSize <var>value</var></a></td><td> 15 </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Zlib compression window size</td></tr>
<tr><td><a href="mod_access_compat.html#deny"> Deny from all|<var>host</var>|env=[!]<var>env-variable</var>
[<var>host</var>|env=[!]<var>env-variable</var>] ...</a></td><td></td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">Controls which hosts are denied access to the
server</td></tr>
<tr class="odd"><td><a href="core.html#directory">&lt;Directory <var>directory-path</var>&gt;
... &lt;/Directory&gt;</a></td><td></td><td>sv</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Enclose a group of directives that apply only to the
named file-system directory, sub-directories, and their contents.</td></tr>
<tr><td><a href="mod_dir.html#directorycheckhandler">DirectoryCheckHandler On|Off</a></td><td> Off </td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Toggle how this module responds when another handler is configured</td></tr>
<tr class="odd"><td><a href="mod_dir.html#directoryindex">DirectoryIndex
    disabled | <var>local-url</var> [<var>local-url</var>] ...</a></td><td> index.html </td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">List of resources to look for when the client requests
a directory</td></tr>
<tr><td><a href="mod_dir.html#directoryindexredirect">DirectoryIndexRedirect on | off | permanent | temp | seeother |
<var>3xx-code</var>
</a></td><td> off </td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Configures an external redirect for directory indexes.
</td></tr>
<tr class="odd"><td><a href="core.html#directorymatch">&lt;DirectoryMatch <var>regex</var>&gt;
... &lt;/DirectoryMatch&gt;</a></td><td></td><td>sv</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Enclose directives that apply to
the contents of file-system directories matching a regular expression.</td></tr>
<tr><td><a href="mod_dir.html#directoryslash">DirectorySlash On|Off</a></td><td> On </td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Toggle trailing slash redirects on or off</td></tr>
<tr class="odd"><td><a href="core.html#documentroot">DocumentRoot <var>directory-path</var></a></td><td> /usr/local/apache/h +</td><td>sv</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Directory that forms the main document tree visible
from the web</td></tr>
<tr><td><a href="mod_privileges.html#dtraceprivileges">DTracePrivileges On|Off</a></td><td> Off </td><td>s</td><td>X</td></tr><tr><td class="descr" colspan="4">Determines whether the privileges required by dtrace are enabled.</td></tr>
<tr class="odd"><td><a href="mod_dumpio.html#dumpioinput">DumpIOInput On|Off</a></td><td> Off </td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Dump all input data to the error log</td></tr>
<tr><td><a href="mod_dumpio.html#dumpiooutput">DumpIOOutput On|Off</a></td><td> Off </td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Dump all output data to the error log</td></tr>
<tr class="odd"><td><a href="core.html#else" id="E" name="E">&lt;Else&gt; ... &lt;/Else&gt;</a></td><td></td><td>svdh</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Contains directives that apply only if the condition of a
previous <code class="directive"><a href="../mod/core.html#if">&lt;If&gt;</a></code> or
<code class="directive"><a href="../mod/core.html#elseif">&lt;ElseIf&gt;</a></code> section is not
satisfied by a request at runtime</td></tr>
<tr><td><a href="core.html#elseif">&lt;ElseIf <var>expression</var>&gt; ... &lt;/ElseIf&gt;</a></td><td></td><td>svdh</td><td>C</td></tr><tr><td class="descr" colspan="4">Contains directives that apply only if a condition is satisfied
by a request at runtime while the condition of a previous
<code class="directive"><a href="../mod/core.html#if">&lt;If&gt;</a></code> or
<code class="directive">&lt;ElseIf&gt;</code> section is not
satisfied</td></tr>
<tr class="odd"><td><a href="mpm_common.html#enableexceptionhook">EnableExceptionHook On|Off</a></td><td> Off </td><td>s</td><td>M</td></tr><tr class="odd"><td class="descr" colspan="4">Enables a hook that runs exception handlers
after a crash</td></tr>
<tr><td><a href="core.html#enablemmap">EnableMMAP On|Off</a></td><td> On </td><td>svdh</td><td>C</td></tr><tr><td class="descr" colspan="4">Use memory-mapping to read files during delivery</td></tr>
<tr class="odd"><td><a href="core.html#enablesendfile">EnableSendfile On|Off</a></td><td> Off </td><td>svdh</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Use the kernel sendfile support to deliver files to the client</td></tr>
<tr><td><a href="core.html#error">Error <var>message</var></a></td><td></td><td>svdh</td><td>C</td></tr><tr><td class="descr" colspan="4">Abort configuration parsing with a custom error message</td></tr>
<tr class="odd"><td><a href="core.html#errordocument">ErrorDocument <var>error-code</var> <var>document</var></a></td><td></td><td>svdh</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">What the server will return to the client
in case of an error</td></tr>
<tr><td><a href="core.html#errorlog"> ErrorLog <var>file-path</var>|syslog[:<var>facility</var>]</a></td><td> logs/error_log (Uni +</td><td>sv</td><td>C</td></tr><tr><td class="descr" colspan="4">Location where the server will log errors</td></tr>
<tr class="odd"><td><a href="core.html#errorlogformat"> ErrorLog [connection|request] <var>format</var></a></td><td></td><td>sv</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Format specification for error log entries</td></tr>
<tr><td><a href="mod_example_hooks.html#example">Example</a></td><td></td><td>svdh</td><td>X</td></tr><tr><td class="descr" colspan="4">Demonstration directive to illustrate the Apache module
API</td></tr>
<tr class="odd"><td><a href="mod_expires.html#expiresactive">ExpiresActive On|Off</a></td><td> Off </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Enables generation of <code>Expires</code>
headers</td></tr>
<tr><td><a href="mod_expires.html#expiresbytype">ExpiresByType <var>MIME-type</var>
<var>&lt;code&gt;seconds</var></a></td><td></td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Value of the <code>Expires</code> header configured
by MIME type</td></tr>
<tr class="odd"><td><a href="mod_expires.html#expiresdefault">ExpiresDefault <var>&lt;code&gt;seconds</var></a></td><td></td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Default algorithm for calculating expiration time</td></tr>
<tr><td><a href="core.html#extendedstatus">ExtendedStatus On|Off</a></td><td> Off[*] </td><td>s</td><td>C</td></tr><tr><td class="descr" colspan="4">Keep track of extended status information for each 
request</td></tr>
<tr class="odd"><td><a href="mod_ext_filter.html#extfilterdefine">ExtFilterDefine <var>filtername</var> <var>parameters</var></a></td><td></td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Define an external filter</td></tr>
<tr><td><a href="mod_ext_filter.html#extfilteroptions">ExtFilterOptions <var>option</var> [<var>option</var>] ...</a></td><td> NoLogStderr </td><td>d</td><td>E</td></tr><tr><td class="descr" colspan="4">Configure <code class="module"><a href="../mod/mod_ext_filter.html">mod_ext_filter</a></code> options</td></tr>
<tr class="odd"><td><a href="mod_dir.html#fallbackresource" id="F" name="F">FallbackResource disabled | <var>local-url</var></a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Define a default URL for requests that don't map to a file</td></tr>
<tr><td><a href="core.html#fileetag">FileETag <var>component</var> ...</a></td><td> INode MTime Size </td><td>svdh</td><td>C</td></tr><tr><td class="descr" colspan="4">File attributes used to create the ETag
HTTP response header for static files</td></tr>
<tr class="odd"><td><a href="core.html#files">&lt;Files <var>filename</var>&gt; ... &lt;/Files&gt;</a></td><td></td><td>svdh</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Contains directives that apply to matched
filenames</td></tr>
<tr><td><a href="core.html#filesmatch">&lt;FilesMatch <var>regex</var>&gt; ... &lt;/FilesMatch&gt;</a></td><td></td><td>svdh</td><td>C</td></tr><tr><td class="descr" colspan="4">Contains directives that apply to regular-expression matched
filenames</td></tr>
<tr class="odd"><td><a href="mod_filter.html#filterchain">FilterChain [+=-@!]<var>filter-name</var> <var>...</var></a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Configure the filter chain</td></tr>
<tr><td><a href="mod_filter.html#filterdeclare">FilterDeclare <var>filter-name</var> <var>[type]</var></a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Declare a smart filter</td></tr>
<tr class="odd"><td><a href="mod_filter.html#filterprotocol">FilterProtocol <var>filter-name</var> [<var>provider-name</var>]
    <var>proto-flags</var></a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Deal with correct HTTP protocol handling</td></tr>
<tr><td><a href="mod_filter.html#filterprovider">FilterProvider <var>filter-name</var> <var>provider-name</var>
 <var>expression</var></a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Register a content filter</td></tr>
<tr class="odd"><td><a href="mod_filter.html#filtertrace">FilterTrace <var>filter-name</var> <var>level</var></a></td><td></td><td>svd</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Get debug/diagnostic information from
    <code class="module"><a href="../mod/mod_filter.html">mod_filter</a></code></td></tr>
<tr><td><a href="mod_negotiation.html#forcelanguagepriority">ForceLanguagePriority None|Prefer|Fallback [Prefer|Fallback]</a></td><td> Prefer </td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Action to take if a single acceptable document is not
found</td></tr>
<tr class="odd"><td><a href="core.html#forcetype">ForceType <var>media-type</var>|None</a></td><td></td><td>dh</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Forces all matching files to be served with the specified
media type in the HTTP Content-Type header field</td></tr>
<tr><td><a href="mod_log_forensic.html#forensiclog">ForensicLog <var>filename</var>|<var>pipe</var></a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Sets filename of the forensic log</td></tr>
<tr class="odd"><td><a href="mod_log_config.html#globallog" id="G" name="G">GlobalLog<var>file</var>|<var>pipe</var>
<var>format</var>|<var>nickname</var>
[env=[!]<var>environment-variable</var>|
expr=<var>expression</var>]</a></td><td></td><td>s</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Sets filename and format of log file</td></tr>
<tr><td><a href="core.html#gprofdir">GprofDir <var>/tmp/gprof/</var>|<var>/tmp/gprof/</var>%</a></td><td></td><td>sv</td><td>C</td></tr><tr><td class="descr" colspan="4">Directory to write gmon.out profiling data to.  </td></tr>
<tr class="odd"><td><a href="mpm_common.html#gracefulshutdowntimeout">GracefulShutdownTimeout <var>seconds</var></a></td><td> 0 </td><td>s</td><td>M</td></tr><tr class="odd"><td class="descr" colspan="4">Specify a timeout after which a gracefully shutdown server
will exit.</td></tr>
<tr><td><a href="mod_unixd.html#group">Group <var>unix-group</var></a></td><td> #-1 </td><td>s</td><td>B</td></tr><tr><td class="descr" colspan="4">Group under which the server will answer
requests</td></tr>
<tr class="odd"><td><a href="mod_http2.html#h2copyfiles" id="H" name="H">H2CopyFiles on|off</a></td><td> off </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Determine file handling in responses</td></tr>
<tr><td><a href="mod_http2.html#h2direct">H2Direct on|off</a></td><td> on for h2c, off for +</td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">H2 Direct Protocol Switch</td></tr>
<tr class="odd"><td><a href="mod_http2.html#h2earlyhints">H2EarlyHints on|off</a></td><td> off </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Determine sending of 103 status codes</td></tr>
<tr><td><a href="mod_http2.html#h2maxsessionstreams">H2MaxSessionStreams <em>n</em></a></td><td> 100 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Maximum number of active streams per HTTP/2 session.</td></tr>
<tr class="odd"><td><a href="mod_http2.html#h2maxworkeridleseconds">H2MaxWorkerIdleSeconds <em>n</em></a></td><td> 600 </td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Maximum number of seconds h2 workers remain idle until shut down.</td></tr>
<tr><td><a href="mod_http2.html#h2maxworkers">H2MaxWorkers <em>n</em></a></td><td></td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Maximum number of worker threads to use per child process.</td></tr>
<tr class="odd"><td><a href="mod_http2.html#h2minworkers">H2MinWorkers <em>n</em></a></td><td></td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Minimal number of worker threads to use per child process.</td></tr>
<tr><td><a href="mod_http2.html#h2moderntlsonly">H2ModernTLSOnly on|off</a></td><td> on </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Require HTTP/2 connections to be "modern TLS" only</td></tr>
<tr class="odd"><td><a href="mod_http2.html#h2push">H2Push on|off</a></td><td> on </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">H2 Server Push Switch</td></tr>
<tr><td><a href="mod_http2.html#h2pushdiarysize">H2PushDiarySize <em>n</em></a></td><td> 256 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">H2 Server Push Diary Size</td></tr>
<tr class="odd"><td><a href="mod_http2.html#h2pushpriority">H2PushPriority <em>mime-type</em> [after|before|interleaved] [weight]</a></td><td> * After 16 </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">H2 Server Push Priority</td></tr>
<tr><td><a href="mod_http2.html#h2pushresource">H2PushResource [add] path [critical]</a></td><td></td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Declares resources for early pushing to the client</td></tr>
<tr class="odd"><td><a href="mod_http2.html#h2serializeheaders">H2SerializeHeaders on|off</a></td><td> off </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Serialize Request/Response Processing Switch</td></tr>
<tr><td><a href="mod_http2.html#h2streammaxmemsize">H2StreamMaxMemSize <em>bytes</em></a></td><td> 65536 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Maximum amount of output data buffered per stream.</td></tr>
<tr class="odd"><td><a href="mod_http2.html#h2tlscooldownsecs">H2TLSCoolDownSecs <em>seconds</em></a></td><td> 1 </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">-</td></tr>
<tr><td><a href="mod_http2.html#h2tlswarmupsize">H2TLSWarmUpSize <em>amount</em></a></td><td> 1048576 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">-</td></tr>
<tr class="odd"><td><a href="mod_http2.html#h2upgrade">H2Upgrade on|off</a></td><td> on for h2c, off for +</td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">H2 Upgrade Protocol Switch</td></tr>
<tr><td><a href="mod_http2.html#h2windowsize">H2WindowSize <em>bytes</em></a></td><td> 65535 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Size of Stream Window for upstream data.</td></tr>
<tr class="odd"><td><a href="mod_headers.html#header">Header [<var>condition</var>] add|append|echo|edit|edit*|merge|set|setifempty|unset|note
<var>header</var> [[expr=]<var>value</var> [<var>replacement</var>]
[early|env=[!]<var>varname</var>|expr=<var>expression</var>]]
</a></td><td></td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Configure HTTP response headers</td></tr>
<tr><td><a href="mod_autoindex.html#headername">HeaderName <var>filename</var></a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Name of the file that will be inserted at the top
of the index listing</td></tr>
<tr class="odd"><td><a href="mod_heartbeat.html#heartbeataddress">HeartbeatAddress <var>addr:port</var></a></td><td></td><td>s</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">Multicast address for heartbeat packets</td></tr>
<tr><td><a href="mod_heartmonitor.html#heartbeatlisten">HeartbeatListen<var>addr:port</var></a></td><td></td><td>s</td><td>X</td></tr><tr><td class="descr" colspan="4">multicast address to listen for incoming heartbeat requests </td></tr>
<tr class="odd"><td><a href="mod_heartmonitor.html#heartbeatmaxservers">HeartbeatMaxServers <var>number-of-servers</var></a></td><td> 10 </td><td>s</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">Specifies the maximum number of servers that will be sending 
heartbeat requests to this server</td></tr>
<tr><td><a href="mod_heartmonitor.html#heartbeatstorage">HeartbeatStorage <var>file-path</var></a></td><td> logs/hb.dat </td><td>s</td><td>X</td></tr><tr><td class="descr" colspan="4">Path to store heartbeat data</td></tr>
<tr class="odd"><td><a href="mod_lbmethod_heartbeat.html#heartbeatstorage">HeartbeatStorage <var>file-path</var></a></td><td> logs/hb.dat </td><td>s</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">Path to read heartbeat data</td></tr>
<tr><td><a href="core.html#hostnamelookups">HostnameLookups On|Off|Double</a></td><td> Off </td><td>svd</td><td>C</td></tr><tr><td class="descr" colspan="4">Enables DNS lookups on client IP addresses</td></tr>
<tr class="odd"><td><a href="core.html#httpprotocoloptions">HttpProtocolOptions [Strict|Unsafe] [RegisteredMethods|LenientMethods]
 [Allow0.9|Require1.0]</a></td><td> Strict LenientMetho +</td><td>sv</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Modify restrictions on HTTP Request Messages</td></tr>
<tr><td><a href="mod_ident.html#identitycheck" id="I" name="I">IdentityCheck On|Off</a></td><td> Off </td><td>svd</td><td>E</td></tr><tr><td class="descr" colspan="4">Enables logging of the RFC 1413 identity of the remote
user</td></tr>
<tr class="odd"><td><a href="mod_ident.html#identitychecktimeout">IdentityCheckTimeout <var>seconds</var></a></td><td> 30 </td><td>svd</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Determines the timeout duration for ident requests</td></tr>
<tr><td><a href="core.html#if">&lt;If <var>expression</var>&gt; ... &lt;/If&gt;</a></td><td></td><td>svdh</td><td>C</td></tr><tr><td class="descr" colspan="4">Contains directives that apply only if a condition is
satisfied by a request at runtime</td></tr>
<tr class="odd"><td><a href="core.html#ifdefine">&lt;IfDefine [!]<var>parameter-name</var>&gt; ...
    &lt;/IfDefine&gt;</a></td><td></td><td>svdh</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Encloses directives that will be processed only
if a test is true at startup</td></tr>
<tr><td><a href="core.html#ifdirective">&lt;IfDirective [!]<var>directive-name</var>&gt; ...
    &lt;/IfDirective&gt;</a></td><td></td><td>svdh</td><td>C</td></tr><tr><td class="descr" colspan="4">Encloses directives that are processed conditional on the
presence or absence of a specific directive</td></tr>
<tr class="odd"><td><a href="core.html#iffile">&lt;IfFile [!]<var>parameter-name</var>&gt; ...
    &lt;/IfFile&gt;</a></td><td></td><td>svdh</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Encloses directives that will be processed only
if file exists at startup</td></tr>
<tr><td><a href="core.html#ifmodule">&lt;IfModule [!]<var>module-file</var>|<var>module-identifier</var>&gt; ...
    &lt;/IfModule&gt;</a></td><td></td><td>svdh</td><td>C</td></tr><tr><td class="descr" colspan="4">Encloses directives that are processed conditional on the
presence or absence of a specific module</td></tr>
<tr class="odd"><td><a href="core.html#ifsection">&lt;IfSection [!]<var>section-name</var>&gt; ...
    &lt;/IfSection&gt;</a></td><td></td><td>svdh</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Encloses directives that are processed conditional on the
presence or absence of a specific section directive</td></tr>
<tr><td><a href="mod_version.html#ifversion">&lt;IfVersion [[!]<var>operator</var>] <var>version</var>&gt; ...
&lt;/IfVersion&gt;</a></td><td></td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">contains version dependent configuration</td></tr>
<tr class="odd"><td><a href="mod_imagemap.html#imapbase">ImapBase map|referer|<var>URL</var></a></td><td> http://servername/ </td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Default <code>base</code> for imagemap files</td></tr>
<tr><td><a href="mod_imagemap.html#imapdefault">ImapDefault error|nocontent|map|referer|<var>URL</var></a></td><td> nocontent </td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Default action when an imagemap is called with coordinates
that are not explicitly mapped</td></tr>
<tr class="odd"><td><a href="mod_imagemap.html#imapmenu">ImapMenu none|formatted|semiformatted|unformatted</a></td><td> formatted </td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Action if no coordinates are given when calling
an imagemap</td></tr>
<tr><td><a href="core.html#include">Include [<var>optional</var>|<var>strict</var>] <var>file-path</var>|<var>directory-path</var>|<var>wildcard</var></a></td><td></td><td>svd</td><td>C</td></tr><tr><td class="descr" colspan="4">Includes other configuration files from within
the server configuration files</td></tr>
<tr class="odd"><td><a href="core.html#includeoptional">IncludeOptional <var>file-path</var>|<var>directory-path</var>|<var>wildcard</var></a></td><td></td><td>svd</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Includes other configuration files from within
the server configuration files</td></tr>
<tr><td><a href="mod_autoindex.html#indexheadinsert">IndexHeadInsert <var>"markup ..."</var></a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Inserts text in the HEAD section of an index page.</td></tr>
<tr class="odd"><td><a href="mod_autoindex.html#indexignore">IndexIgnore <var>file</var> [<var>file</var>] ...</a></td><td> "." </td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Adds to the list of files to hide when listing
a directory</td></tr>
<tr><td><a href="mod_autoindex.html#indexignorereset">IndexIgnoreReset ON|OFF</a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Empties the list of files to hide when listing
a directory</td></tr>
<tr class="odd"><td><a href="mod_autoindex.html#indexoptions">IndexOptions  [+|-]<var>option</var> [[+|-]<var>option</var>]
...</a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Various configuration settings for directory
indexing</td></tr>
<tr><td><a href="mod_autoindex.html#indexorderdefault">IndexOrderDefault Ascending|Descending
Name|Date|Size|Description</a></td><td> Ascending Name </td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Sets the default ordering of the directory index</td></tr>
<tr class="odd"><td><a href="mod_autoindex.html#indexstylesheet">IndexStyleSheet <var>url-path</var></a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Adds a CSS stylesheet to the directory index</td></tr>
<tr><td><a href="mod_sed.html#inputsed">InputSed <var>sed-command</var></a></td><td></td><td>dh</td><td>X</td></tr><tr><td class="descr" colspan="4">Sed command to filter request data (typically <code>POST</code> data)</td></tr>
<tr class="odd"><td><a href="mod_isapi.html#isapiappendlogtoerrors">ISAPIAppendLogToErrors on|off</a></td><td> off </td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Record <code>HSE_APPEND_LOG_PARAMETER</code> requests from
ISAPI extensions to the error log</td></tr>
<tr><td><a href="mod_isapi.html#isapiappendlogtoquery">ISAPIAppendLogToQuery on|off</a></td><td> on </td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Record <code>HSE_APPEND_LOG_PARAMETER</code> requests from
ISAPI extensions to the query field</td></tr>
<tr class="odd"><td><a href="mod_isapi.html#isapicachefile">ISAPICacheFile <var>file-path</var> [<var>file-path</var>]
...</a></td><td></td><td>sv</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">ISAPI .dll files to be loaded at startup</td></tr>
<tr><td><a href="mod_isapi.html#isapifakeasync">ISAPIFakeAsync on|off</a></td><td> off </td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Fake asynchronous support for ISAPI callbacks</td></tr>
<tr class="odd"><td><a href="mod_isapi.html#isapilognotsupported">ISAPILogNotSupported on|off</a></td><td> off </td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Log unsupported feature requests from ISAPI
extensions</td></tr>
<tr><td><a href="mod_isapi.html#isapireadaheadbuffer">ISAPIReadAheadBuffer <var>size</var></a></td><td> 49152 </td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Size of the Read Ahead Buffer sent to ISAPI
extensions</td></tr>
<tr class="odd"><td><a href="core.html#keepalive" id="K" name="K">KeepAlive On|Off</a></td><td> On </td><td>sv</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Enables HTTP persistent connections</td></tr>
<tr><td><a href="core.html#keepalivetimeout">KeepAliveTimeout <var>num</var>[ms]</a></td><td> 5 </td><td>sv</td><td>C</td></tr><tr><td class="descr" colspan="4">Amount of time the server will wait for subsequent
requests on a persistent connection</td></tr>
<tr class="odd"><td><a href="mod_request.html#keptbodysize">KeptBodySize <var>maximum size in bytes</var></a></td><td> 0 </td><td>d</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Keep the request body instead of discarding it up to
the specified maximum size, for potential use by filters such as
mod_include.</td></tr>
<tr><td><a href="mod_negotiation.html#languagepriority" id="L" name="L">LanguagePriority <var>MIME-lang</var> [<var>MIME-lang</var>]
...</a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">The precedence of language variants for cases where
the client does not express a preference</td></tr>
<tr class="odd"><td><a href="mod_ldap.html#ldapcacheentries">LDAPCacheEntries <var>number</var></a></td><td> 1024 </td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Maximum number of entries in the primary LDAP cache</td></tr>
<tr><td><a href="mod_ldap.html#ldapcachettl">LDAPCacheTTL <var>seconds</var></a></td><td> 600 </td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Time that cached items remain valid</td></tr>
<tr class="odd"><td><a href="mod_ldap.html#ldapconnectionpoolttl">LDAPConnectionPoolTTL <var>n</var></a></td><td> -1 </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Discard backend connections that have been sitting in the connection pool too long</td></tr>
<tr><td><a href="mod_ldap.html#ldapconnectiontimeout">LDAPConnectionTimeout <var>seconds</var></a></td><td></td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Specifies the socket connection timeout in seconds</td></tr>
<tr class="odd"><td><a href="mod_ldap.html#ldaplibrarydebug">LDAPLibraryDebug <var>7</var></a></td><td></td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Enable debugging in the LDAP SDK</td></tr>
<tr><td><a href="mod_ldap.html#ldapopcacheentries">LDAPOpCacheEntries <var>number</var></a></td><td> 1024 </td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Number of entries used to cache LDAP compare
operations</td></tr>
<tr class="odd"><td><a href="mod_ldap.html#ldapopcachettl">LDAPOpCacheTTL <var>seconds</var></a></td><td> 600 </td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Time that entries in the operation cache remain
valid</td></tr>
<tr><td><a href="mod_ldap.html#ldapreferralhoplimit">LDAPReferralHopLimit <var>number</var></a></td><td></td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">The maximum number of referral hops to chase before terminating an LDAP query.</td></tr>
<tr class="odd"><td><a href="mod_ldap.html#ldapreferrals">LDAPReferrals <var>On|Off|default</var></a></td><td> On </td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Enable referral chasing during queries to the LDAP server.</td></tr>
<tr><td><a href="mod_ldap.html#ldapretries">LDAPRetries <var>number-of-retries</var></a></td><td> 3 </td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Configures the number of LDAP server retries.</td></tr>
<tr class="odd"><td><a href="mod_ldap.html#ldapretrydelay">LDAPRetryDelay <var>seconds</var></a></td><td> 0 </td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Configures the delay between LDAP server retries.</td></tr>
<tr><td><a href="mod_ldap.html#ldapsharedcachefile">LDAPSharedCacheFile <var>directory-path/filename</var></a></td><td></td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Sets the shared memory cache file</td></tr>
<tr class="odd"><td><a href="mod_ldap.html#ldapsharedcachesize">LDAPSharedCacheSize <var>bytes</var></a></td><td> 500000 </td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Size in bytes of the shared-memory cache</td></tr>
<tr><td><a href="mod_ldap.html#ldaptimeout">LDAPTimeout <var>seconds</var></a></td><td> 60 </td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Specifies the timeout for LDAP search and bind operations, in seconds</td></tr>
<tr class="odd"><td><a href="mod_ldap.html#ldaptrustedclientcert">LDAPTrustedClientCert <var>type</var> <var>directory-path/filename/nickname</var> <var>[password]</var></a></td><td></td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Sets the file containing or nickname referring to a per
connection client certificate. Not all LDAP toolkits support per
connection client certificates.</td></tr>
<tr><td><a href="mod_ldap.html#ldaptrustedglobalcert">LDAPTrustedGlobalCert <var>type</var> <var>directory-path/filename</var> <var>[password]</var></a></td><td></td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Sets the file or database containing global trusted
Certificate Authority or global client certificates</td></tr>
<tr class="odd"><td><a href="mod_ldap.html#ldaptrustedmode">LDAPTrustedMode <var>type</var></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Specifies the SSL/TLS mode to be used when connecting to an LDAP server.</td></tr>
<tr><td><a href="mod_ldap.html#ldapverifyservercert">LDAPVerifyServerCert <var>On|Off</var></a></td><td> On </td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Force server certificate verification</td></tr>
<tr class="odd"><td><a href="core.html#limit">&lt;Limit <var>method</var> [<var>method</var>] ... &gt; ...
    &lt;/Limit&gt;</a></td><td></td><td>dh</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Restrict enclosed access controls to only certain HTTP
methods</td></tr>
<tr><td><a href="core.html#limitexcept">&lt;LimitExcept <var>method</var> [<var>method</var>] ... &gt; ...
    &lt;/LimitExcept&gt;</a></td><td></td><td>dh</td><td>C</td></tr><tr><td class="descr" colspan="4">Restrict access controls to all HTTP methods
except the named ones</td></tr>
<tr class="odd"><td><a href="core.html#limitinternalrecursion">LimitInternalRecursion <var>number</var> [<var>number</var>]</a></td><td> 10 </td><td>sv</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Determine maximum number of internal redirects and nested
subrequests</td></tr>
<tr><td><a href="core.html#limitrequestbody">LimitRequestBody <var>bytes</var></a></td><td> 0 </td><td>svdh</td><td>C</td></tr><tr><td class="descr" colspan="4">Restricts the total size of the HTTP request body sent
from the client</td></tr>
<tr class="odd"><td><a href="core.html#limitrequestfields">LimitRequestFields <var>number</var></a></td><td> 100 </td><td>sv</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Limits the number of HTTP request header fields that
will be accepted from the client</td></tr>
<tr><td><a href="core.html#limitrequestfieldsize">LimitRequestFieldSize <var>bytes</var></a></td><td> 8190 </td><td>sv</td><td>C</td></tr><tr><td class="descr" colspan="4">Limits the size of the HTTP request header allowed from the
client</td></tr>
<tr class="odd"><td><a href="core.html#limitrequestline">LimitRequestLine <var>bytes</var></a></td><td> 8190 </td><td>sv</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Limit the size of the HTTP request line that will be accepted
from the client</td></tr>
<tr><td><a href="core.html#limitxmlrequestbody">LimitXMLRequestBody <var>bytes</var></a></td><td> 1000000 </td><td>svdh</td><td>C</td></tr><tr><td class="descr" colspan="4">Limits the size of an XML-based request body</td></tr>
<tr class="odd"><td><a href="mpm_common.html#listen">Listen [<var>IP-address</var>:]<var>portnumber</var> [<var>protocol</var>]</a></td><td></td><td>s</td><td>M</td></tr><tr class="odd"><td class="descr" colspan="4">IP addresses and ports that the server
listens to</td></tr>
<tr><td><a href="mpm_common.html#listenbacklog">ListenBacklog <var>backlog</var></a></td><td></td><td>s</td><td>M</td></tr><tr><td class="descr" colspan="4">Maximum length of the queue of pending connections</td></tr>
<tr class="odd"><td><a href="mpm_common.html#listencoresbucketsratio">ListenCoresBucketsRatio <var>ratio</var></a></td><td> 0 (disabled) </td><td>s</td><td>M</td></tr><tr class="odd"><td class="descr" colspan="4">Ratio between the number of CPU cores (online) and the number of
listeners' buckets</td></tr>
<tr><td><a href="mod_so.html#loadfile">LoadFile <em>filename</em> [<em>filename</em>] ...</a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Link in the named object file or library</td></tr>
<tr class="odd"><td><a href="mod_so.html#loadmodule">LoadModule <em>module filename</em></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Links in the object file or library, and adds to the list
of active modules</td></tr>
<tr><td><a href="core.html#location">&lt;Location
    <var>URL-path</var>|<var>URL</var>&gt; ... &lt;/Location&gt;</a></td><td></td><td>sv</td><td>C</td></tr><tr><td class="descr" colspan="4">Applies the enclosed directives only to matching
URLs</td></tr>
<tr class="odd"><td><a href="core.html#locationmatch">&lt;LocationMatch
    <var>regex</var>&gt; ... &lt;/LocationMatch&gt;</a></td><td></td><td>sv</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Applies the enclosed directives only to regular-expression
matching URLs</td></tr>
<tr><td><a href="mod_log_config.html#logformat">LogFormat <var>format</var>|<var>nickname</var>
[<var>nickname</var>]</a></td><td> "%h %l %u %t \"%r\" +</td><td>sv</td><td>B</td></tr><tr><td class="descr" colspan="4">Describes a format for use in a log file</td></tr>
<tr class="odd"><td><a href="mod_logio.html#logiotrackttfb">LogIOTrackTTFB ON|OFF</a></td><td> OFF </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Enable tracking of time to first byte (TTFB)</td></tr>
<tr><td><a href="core.html#loglevel">LogLevel [<var>module</var>:]<var>level</var>
    [<var>module</var>:<var>level</var>] ...
</a></td><td> warn </td><td>svd</td><td>C</td></tr><tr><td class="descr" colspan="4">Controls the verbosity of the ErrorLog</td></tr>
<tr class="odd"><td><a href="mod_log_debug.html#logmessage">LogMessage <var>message</var>
[hook=<var>hook</var>] [expr=<var>expression</var>]
</a></td><td></td><td>d</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">Log user-defined message to error log
</td></tr>
<tr><td><a href="mod_lua.html#luaauthzprovider">LuaAuthzProvider provider_name /path/to/lua/script.lua function_name</a></td><td></td><td>s</td><td>X</td></tr><tr><td class="descr" colspan="4">Plug an authorization provider function into <code class="module"><a href="../mod/mod_authz_core.html">mod_authz_core</a></code>
</td></tr>
<tr class="odd"><td><a href="mod_lua.html#luacodecache">LuaCodeCache stat|forever|never</a></td><td> stat </td><td>svdh</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">Configure the compiled code cache.</td></tr>
<tr><td><a href="mod_lua.html#luahookaccesschecker">LuaHookAccessChecker  /path/to/lua/script.lua  hook_function_name [early|late]</a></td><td></td><td>svdh</td><td>X</td></tr><tr><td class="descr" colspan="4">Provide a hook for the access_checker phase of request processing</td></tr>
<tr class="odd"><td><a href="mod_lua.html#luahookauthchecker">LuaHookAuthChecker  /path/to/lua/script.lua hook_function_name [early|late]</a></td><td></td><td>svdh</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">Provide a hook for the auth_checker phase of request processing</td></tr>
<tr><td><a href="mod_lua.html#luahookcheckuserid">LuaHookCheckUserID  /path/to/lua/script.lua hook_function_name [early|late]</a></td><td></td><td>svdh</td><td>X</td></tr><tr><td class="descr" colspan="4">Provide a hook for the check_user_id phase of request processing</td></tr>
<tr class="odd"><td><a href="mod_lua.html#luahookfixups">LuaHookFixups  /path/to/lua/script.lua hook_function_name</a></td><td></td><td>svdh</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">Provide a hook for the fixups phase of a request
processing</td></tr>
<tr><td><a href="mod_lua.html#luahookinsertfilter">LuaHookInsertFilter  /path/to/lua/script.lua hook_function_name</a></td><td></td><td>svdh</td><td>X</td></tr><tr><td class="descr" colspan="4">Provide a hook for the insert_filter phase of request processing</td></tr>
<tr class="odd"><td><a href="mod_lua.html#luahooklog">LuaHookLog  /path/to/lua/script.lua log_function_name</a></td><td></td><td>svdh</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">Provide a hook for the access log phase of a request
processing</td></tr>
<tr><td><a href="mod_lua.html#luahookmaptostorage">LuaHookMapToStorage  /path/to/lua/script.lua hook_function_name</a></td><td></td><td>svdh</td><td>X</td></tr><tr><td class="descr" colspan="4">Provide a hook for the map_to_storage phase of request processing</td></tr>
<tr class="odd"><td><a href="mod_lua.html#luahooktranslatename">LuaHookTranslateName  /path/to/lua/script.lua  hook_function_name [early|late]</a></td><td></td><td>sv</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">Provide a hook for the translate name phase of request processing</td></tr>
<tr><td><a href="mod_lua.html#luahooktypechecker">LuaHookTypeChecker  /path/to/lua/script.lua hook_function_name</a></td><td></td><td>svdh</td><td>X</td></tr><tr><td class="descr" colspan="4">Provide a hook for the type_checker phase of request processing</td></tr>
<tr class="odd"><td><a href="mod_lua.html#luainherit">LuaInherit none|parent-first|parent-last</a></td><td> parent-first </td><td>svdh</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">Controls how parent configuration sections are merged into children</td></tr>
<tr><td><a href="mod_lua.html#luainputfilter">LuaInputFilter filter_name /path/to/lua/script.lua function_name</a></td><td></td><td>s</td><td>X</td></tr><tr><td class="descr" colspan="4">Provide a Lua function for content input filtering</td></tr>
<tr class="odd"><td><a href="mod_lua.html#luamaphandler">LuaMapHandler uri-pattern /path/to/lua/script.lua [function-name]</a></td><td></td><td>svdh</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">Map a path to a lua handler</td></tr>
<tr><td><a href="mod_lua.html#luaoutputfilter">LuaOutputFilter filter_name /path/to/lua/script.lua function_name</a></td><td></td><td>s</td><td>X</td></tr><tr><td class="descr" colspan="4">Provide a Lua function for content output filtering</td></tr>
<tr class="odd"><td><a href="mod_lua.html#luapackagecpath">LuaPackageCPath /path/to/include/?.soa</a></td><td></td><td>svdh</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">Add a directory to lua's package.cpath</td></tr>
<tr><td><a href="mod_lua.html#luapackagepath">LuaPackagePath /path/to/include/?.lua</a></td><td></td><td>svdh</td><td>X</td></tr><tr><td class="descr" colspan="4">Add a directory to lua's package.path</td></tr>
<tr class="odd"><td><a href="mod_lua.html#luaquickhandler">LuaQuickHandler /path/to/script.lua hook_function_name</a></td><td></td><td>sv</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">Provide a hook for the quick handler of request processing</td></tr>
<tr><td><a href="mod_lua.html#luaroot">LuaRoot /path/to/a/directory</a></td><td></td><td>svdh</td><td>X</td></tr><tr><td class="descr" colspan="4">Specify the base path for resolving relative paths for mod_lua directives</td></tr>
<tr class="odd"><td><a href="mod_lua.html#luascope">LuaScope once|request|conn|thread|server [min] [max]</a></td><td> once </td><td>svdh</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">One of once, request, conn, thread -- default is once</td></tr>
<tr><td><a href="mod_macro.html#macro" id="M" name="M">
&lt;Macro <var>name</var> [<var>par1</var> .. <var>parN</var>]&gt;
... &lt;/Macro&gt;</a></td><td></td><td>svd</td><td>B</td></tr><tr><td class="descr" colspan="4">Define a configuration file macro</td></tr>
<tr class="odd"><td><a href="mpm_common.html#maxconnectionsperchild">MaxConnectionsPerChild <var>number</var></a></td><td> 0 </td><td>s</td><td>M</td></tr><tr class="odd"><td class="descr" colspan="4">Limit on the number of connections that an individual child server
will handle during its life</td></tr>
<tr><td><a href="core.html#maxkeepaliverequests">MaxKeepAliveRequests <var>number</var></a></td><td> 100 </td><td>sv</td><td>C</td></tr><tr><td class="descr" colspan="4">Number of requests allowed on a persistent
connection</td></tr>
<tr class="odd"><td><a href="mpm_common.html#maxmemfree">MaxMemFree <var>KBytes</var></a></td><td> 2048 </td><td>s</td><td>M</td></tr><tr class="odd"><td class="descr" colspan="4">Maximum amount of memory that the main allocator is allowed
to hold without calling <code>free()</code></td></tr>
<tr><td><a href="core.html#maxrangeoverlaps">MaxRangeOverlaps default | unlimited | none | <var>number-of-ranges</var></a></td><td> 20 </td><td>svd</td><td>C</td></tr><tr><td class="descr" colspan="4">Number of overlapping ranges (eg: <code>100-200,150-300</code>) allowed before returning the complete
        resource </td></tr>
<tr class="odd"><td><a href="core.html#maxrangereversals">MaxRangeReversals default | unlimited | none | <var>number-of-ranges</var></a></td><td> 20 </td><td>svd</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Number of range reversals (eg: <code>100-200,50-70</code>) allowed before returning the complete
        resource </td></tr>
<tr><td><a href="core.html#maxranges">MaxRanges default | unlimited | none | <var>number-of-ranges</var></a></td><td> 200 </td><td>svd</td><td>C</td></tr><tr><td class="descr" colspan="4">Number of ranges allowed before returning the complete
resource </td></tr>
<tr class="odd"><td><a href="mpm_common.html#maxrequestworkers">MaxRequestWorkers <var>number</var></a></td><td></td><td>s</td><td>M</td></tr><tr class="odd"><td class="descr" colspan="4">Maximum number of connections that will be processed
simultaneously</td></tr>
<tr><td><a href="prefork.html#maxspareservers">MaxSpareServers <var>number</var></a></td><td> 10 </td><td>s</td><td>M</td></tr><tr><td class="descr" colspan="4">Maximum number of idle child server processes</td></tr>
<tr class="odd"><td><a href="mpm_common.html#maxsparethreads">MaxSpareThreads <var>number</var></a></td><td></td><td>s</td><td>M</td></tr><tr class="odd"><td class="descr" colspan="4">Maximum number of idle threads</td></tr>
<tr><td><a href="mpm_netware.html#maxthreads">MaxThreads <var>number</var></a></td><td> 2048 </td><td>s</td><td>M</td></tr><tr><td class="descr" colspan="4">Set the maximum number of worker threads</td></tr>
<tr class="odd"><td><a href="mod_md.html#mdbaseserver">MDBaseServer on|off</a></td><td> off </td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Control if base server may be managed or only virtual hosts.</td></tr>
<tr><td><a href="mod_md.html#mdcachallenges">MDCAChallenges <var>name</var> [ <var>name</var> ... ]</a></td><td> tls-sni-01 http-01 </td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Type of ACME challenge used to prove domain ownership.</td></tr>
<tr class="odd"><td><a href="mod_md.html#mdcertificateagreement">MDCertificateAgreement <var>url-of-terms-of-service</var></a></td><td></td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">The URL of the Terms-of-Service document, that the CA server requires you to accept.</td></tr>
<tr><td><a href="mod_md.html#mdcertificateauthority">MDCertificateAuthority <var>url</var></a></td><td> https://acme-v01.ap +</td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">The URL of the ACME Certificate Authority service.</td></tr>
<tr class="odd"><td><a href="mod_md.html#mdcertificateprotocol">MDCertificateProtocol <var>protocol</var></a></td><td> ACME </td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">The protocol to use with the Certificate Authority.</td></tr>
<tr><td><a href="mod_md.html#mddrivemode">MDDriveMode always|auto|manual</a></td><td> auto </td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Control when it is allowed to obtain/renew certificates.</td></tr>
<tr class="odd"><td><a href="mod_md.html#mdhttpproxy">MDHttpProxy <var>url</var></a></td><td></td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Define a proxy for outgoing connections.</td></tr>
<tr><td><a href="mod_md.html#mdmember">MDMember <var>hostname</var></a></td><td></td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Additional hostname for the managed domain.</td></tr>
<tr class="odd"><td><a href="mod_md.html#mdmembers">MDMembers auto|manual</a></td><td> auto </td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Control if the alias domain names are automatically added.</td></tr>
<tr><td><a href="mod_md.html#mdmuststaple">MDMustStaple on|off</a></td><td> off </td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Control if new certificates carry the OCSP Must Staple flag.</td></tr>
<tr class="odd"><td><a href="mod_md.html#mdnotifycmd">MDNotifyCmd <var>path</var> [ <var>args</var> ]</a></td><td></td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Run a program when Managed Domain are ready.</td></tr>
<tr><td><a href="mod_md.html#mdomain">MDomain <var>dns-name</var> [ <var>other-dns-name</var>... ] [auto|manual]</a></td><td></td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Define list of domain names that belong to one group.</td></tr>
<tr class="odd"><td><a href="mod_md.html#mdomainset">&lt;MDomainSet <var>dns-name</var> [ <var>other-dns-name</var>... ]&gt;...&lt;/MDomainSet&gt;</a></td><td></td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Container for directives applied to the same managed domains.</td></tr>
<tr><td><a href="mod_md.html#mdportmap">MDPortMap <var>map1</var> [ <var>map2</var> ]</a></td><td> 80:80 443:443 </td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Map external to internal ports for domain ownership verification.</td></tr>
<tr class="odd"><td><a href="mod_md.html#mdprivatekeys">MDPrivateKeys <var>type</var> [ <var>params</var>... ]</a></td><td> RSA 2048 </td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Set type and size of the private keys generated.</td></tr>
<tr><td><a href="mod_md.html#mdrenewwindow">MDRenewWindow <var>duration</var></a></td><td> 33% </td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Control when a certificate will be renewed.</td></tr>
<tr class="odd"><td><a href="mod_md.html#mdrequirehttps">MDRequireHttps off|temporary|permanent</a></td><td> off </td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Redirects http: traffic to https: for Managed Domains.</td></tr>
<tr><td><a href="mod_md.html#mdstoredir">MDStoreDir path</a></td><td> md </td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Path on the local file system to store the Managed Domains data.</td></tr>
<tr class="odd"><td><a href="mod_socache_memcache.html#memcacheconnttl">MemcacheConnTTL <em>num[units]</em></a></td><td> 15s </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Keepalive time for idle connections</td></tr>
<tr><td><a href="core.html#mergetrailers">MergeTrailers [on|off]</a></td><td> off </td><td>sv</td><td>C</td></tr><tr><td class="descr" colspan="4">Determines whether trailers are merged into headers</td></tr>
<tr class="odd"><td><a href="mod_cern_meta.html#metadir">MetaDir <var>directory</var></a></td><td> .web </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Name of the directory to find CERN-style meta information
files</td></tr>
<tr><td><a href="mod_cern_meta.html#metafiles">MetaFiles on|off</a></td><td> off </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Activates CERN meta-file processing</td></tr>
<tr class="odd"><td><a href="mod_cern_meta.html#metasuffix">MetaSuffix <var>suffix</var></a></td><td> .meta </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">File name suffix for the file containing CERN-style
meta information</td></tr>
<tr><td><a href="mod_mime_magic.html#mimemagicfile">MimeMagicFile <var>file-path</var></a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Enable MIME-type determination based on file contents
using the specified magic file</td></tr>
<tr class="odd"><td><a href="prefork.html#minspareservers">MinSpareServers <var>number</var></a></td><td> 5 </td><td>s</td><td>M</td></tr><tr class="odd"><td class="descr" colspan="4">Minimum number of idle child server processes</td></tr>
<tr><td><a href="mpm_common.html#minsparethreads">MinSpareThreads <var>number</var></a></td><td></td><td>s</td><td>M</td></tr><tr><td class="descr" colspan="4">Minimum number of idle threads available to handle request
spikes</td></tr>
<tr class="odd"><td><a href="mod_file_cache.html#mmapfile">MMapFile <var>file-path</var> [<var>file-path</var>] ...</a></td><td></td><td>s</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">Map a list of files into memory at startup time</td></tr>
<tr><td><a href="mod_dialup.html#modemstandard">ModemStandard V.21|V.26bis|V.32|V.34|V.92</a></td><td></td><td>d</td><td>X</td></tr><tr><td class="descr" colspan="4">Modem standard to simulate</td></tr>
<tr class="odd"><td><a href="mod_mime.html#modmimeusepathinfo">ModMimeUsePathInfo On|Off</a></td><td> Off </td><td>d</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Tells <code class="module"><a href="../mod/mod_mime.html">mod_mime</a></code> to treat <code>path_info</code>
components as part of the filename</td></tr>
<tr><td><a href="mod_mime.html#multiviewsmatch">MultiviewsMatch Any|NegotiatedOnly|Filters|Handlers
[Handlers|Filters]</a></td><td> NegotiatedOnly </td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">The types of files that will be included when searching for
a matching file with MultiViews</td></tr>
<tr class="odd"><td><a href="core.html#mutex">Mutex <var>mechanism</var> [default|<var>mutex-name</var>] ... [OmitPID]</a></td><td> default </td><td>s</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Configures mutex mechanism and lock file directory for all
or specified mutexes</td></tr>
<tr><td><a href="core.html#namevirtualhost" id="N" name="N">NameVirtualHost <var>addr</var>[:<var>port</var>]</a></td><td></td><td>s</td><td>C</td></tr><tr><td class="descr" colspan="4">Designates an IP address for name-virtual
hosting</td></tr>
<tr class="odd"><td><a href="mod_proxy.html#noproxy">NoProxy <var>host</var> [<var>host</var>] ...</a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Hosts, domains, or networks that will be connected to
directly</td></tr>
<tr><td><a href="mod_nw_ssl.html#nwssltrustedcerts">NWSSLTrustedCerts <var>filename</var> [<var>filename</var>] ...</a></td><td></td><td>s</td><td>B</td></tr><tr><td class="descr" colspan="4">List of additional client certificates</td></tr>
<tr class="odd"><td><a href="mod_nw_ssl.html#nwsslupgradeable">NWSSLUpgradeable [<var>IP-address</var>:]<var>portnumber</var></a></td><td></td><td>s</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Allows a connection to be upgraded to an SSL connection upon request</td></tr>
<tr><td><a href="core.html#options" id="O" name="O">Options
    [+|-]<var>option</var> [[+|-]<var>option</var>] ...</a></td><td> All </td><td>svdh</td><td>C</td></tr><tr><td class="descr" colspan="4">Configures what features are available in a particular
directory</td></tr>
<tr class="odd"><td><a href="mod_access_compat.html#order"> Order <var>ordering</var></a></td><td> Deny,Allow </td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Controls the default access state and the order in which
<code class="directive">Allow</code> and <code class="directive">Deny</code> are
evaluated.</td></tr>
<tr><td><a href="mod_sed.html#outputsed">OutputSed <var>sed-command</var></a></td><td></td><td>dh</td><td>X</td></tr><tr><td class="descr" colspan="4">Sed command for filtering response content</td></tr>
<tr class="odd"><td><a href="mod_env.html#passenv" id="P" name="P">PassEnv <var>env-variable</var> [<var>env-variable</var>]
...</a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Passes environment variables from the shell</td></tr>
<tr><td><a href="mpm_common.html#pidfile">PidFile <var>filename</var></a></td><td> logs/httpd.pid </td><td>s</td><td>M</td></tr><tr><td class="descr" colspan="4">File where the server records the process ID
of the daemon</td></tr>
<tr class="odd"><td><a href="mod_privileges.html#privilegesmode">PrivilegesMode FAST|SECURE|SELECTIVE</a></td><td> FAST </td><td>svd</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">Trade off processing speed and efficiency vs security against
malicious privileges-aware code.</td></tr>
<tr><td><a href="core.html#protocol">Protocol <var>protocol</var></a></td><td></td><td>sv</td><td>C</td></tr><tr><td class="descr" colspan="4">Protocol for a listening socket</td></tr>
<tr class="odd"><td><a href="mod_echo.html#protocolecho">ProtocolEcho On|Off</a></td><td> Off </td><td>sv</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">Turn the echo server on or off</td></tr>
<tr><td><a href="core.html#protocols">Protocols <var>protocol</var> ...</a></td><td> http/1.1 </td><td>sv</td><td>C</td></tr><tr><td class="descr" colspan="4">Protocols available for a server/virtual host</td></tr>
<tr class="odd"><td><a href="core.html#protocolshonororder">ProtocolsHonorOrder On|Off</a></td><td> On </td><td>sv</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Determines if order of Protocols determines precedence during negotiation</td></tr>
<tr><td><a href="mod_proxy.html#proxy">&lt;Proxy <var>wildcard-url</var>&gt; ...&lt;/Proxy&gt;</a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Container for directives applied to proxied resources</td></tr>
<tr class="odd"><td><a href="mod_proxy.html#proxyaddheaders">ProxyAddHeaders Off|On</a></td><td> On </td><td>svd</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Add proxy information in X-Forwarded-* headers</td></tr>
<tr><td><a href="mod_proxy.html#proxybadheader">ProxyBadHeader IsError|Ignore|StartBody</a></td><td> IsError </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Determines how to handle bad header lines in a
response</td></tr>
<tr class="odd"><td><a href="mod_proxy.html#proxyblock">ProxyBlock *|<var>word</var>|<var>host</var>|<var>domain</var>
[<var>word</var>|<var>host</var>|<var>domain</var>] ...</a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Words, hosts, or domains that are banned from being
proxied</td></tr>
<tr><td><a href="mod_proxy.html#proxydomain">ProxyDomain <var>Domain</var></a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Default domain name for proxied requests</td></tr>
<tr class="odd"><td><a href="mod_proxy.html#proxyerroroverride">ProxyErrorOverride On|Off</a></td><td> Off </td><td>svd</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Override error pages for proxied content</td></tr>
<tr><td><a href="mod_proxy_express.html#proxyexpressdbmfile">ProxyExpressDBMFile &lt;pathname&gt;</a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Pathname to DBM file.</td></tr>
<tr class="odd"><td><a href="mod_proxy_express.html#proxyexpressdbmtype">ProxyExpressDBMFile &lt;type&gt;</a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">DBM type of file.</td></tr>
<tr><td><a href="mod_proxy_express.html#proxyexpressenable">ProxyExpressEnable [on|off]</a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Enable the module functionality.</td></tr>
<tr class="odd"><td><a href="mod_proxy_fcgi.html#proxyfcgibackendtype">ProxyFCGIBackendType FPM|GENERIC</a></td><td> FPM </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Specify the type of backend FastCGI application</td></tr>
<tr><td><a href="mod_proxy_fcgi.html#proxyfcgisetenvif">ProxyFCGISetEnvIf <var>conditional-expression</var>
    [!]<var>environment-variable-name</var>
    [<var>value-expression</var>]</a></td><td></td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Allow variables sent to FastCGI servers to be fixed up</td></tr>
<tr class="odd"><td><a href="mod_proxy_ftp.html#proxyftpdircharset">ProxyFtpDirCharset <var>character set</var></a></td><td> ISO-8859-1 </td><td>svd</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Define the character set for proxied FTP listings</td></tr>
<tr><td><a href="mod_proxy_ftp.html#proxyftpescapewildcards">ProxyFtpEscapeWildcards [on|off]</a></td><td></td><td>svd</td><td>E</td></tr><tr><td class="descr" colspan="4">Whether wildcards in requested filenames are escaped when sent to the FTP server</td></tr>
<tr class="odd"><td><a href="mod_proxy_ftp.html#proxyftplistonwildcard">ProxyFtpListOnWildcard [on|off]</a></td><td></td><td>svd</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Whether wildcards in requested filenames trigger a file listing</td></tr>
<tr><td><a href="mod_proxy_hcheck.html#proxyhcexpr">ProxyHCExpr <em>name</em> {<em>ap_expr expression</em>}</a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Creates a named condition expression to use to determine health of the backend based on its response</td></tr>
<tr class="odd"><td><a href="mod_proxy_hcheck.html#proxyhctemplate">ProxyHCTemplate <em>name</em> <em>parameter</em>=<em>setting</em> [...]</a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Creates a named template for setting various health check parameters</td></tr>
<tr><td><a href="mod_proxy_hcheck.html#proxyhctpsize">ProxyHCTPsize <em>size</em></a></td><td></td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Sets the total server-wide size of the threadpool used for the health check workers</td></tr>
<tr class="odd"><td><a href="mod_proxy_html.html#proxyhtmlbufsize">ProxyHTMLBufSize <var>bytes</var></a></td><td> 8192 </td><td>svd</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Sets the buffer size increment for buffering inline scripts and
stylesheets.</td></tr>
<tr><td><a href="mod_proxy_html.html#proxyhtmlcharsetout">ProxyHTMLCharsetOut <var>Charset | *</var></a></td><td></td><td>svd</td><td>B</td></tr><tr><td class="descr" colspan="4">Specify a charset for mod_proxy_html output.</td></tr>
<tr class="odd"><td><a href="mod_proxy_html.html#proxyhtmldoctype">ProxyHTMLDocType HTML|XHTML [Legacy]<br /><strong>OR</strong>
<br />ProxyHTMLDocType <var>fpi</var> [SGML|XML]</a></td><td></td><td>svd</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Sets an HTML or XHTML document type declaration.</td></tr>
<tr><td><a href="mod_proxy_html.html#proxyhtmlenable">ProxyHTMLEnable On|Off</a></td><td> Off </td><td>svd</td><td>B</td></tr><tr><td class="descr" colspan="4">Turns the proxy_html filter on or off.</td></tr>
<tr class="odd"><td><a href="mod_proxy_html.html#proxyhtmlevents">ProxyHTMLEvents <var>attribute [attribute ...]</var></a></td><td></td><td>svd</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Specify attributes to treat as scripting events.</td></tr>
<tr><td><a href="mod_proxy_html.html#proxyhtmlextended">ProxyHTMLExtended On|Off</a></td><td> Off </td><td>svd</td><td>B</td></tr><tr><td class="descr" colspan="4">Determines whether to fix links in inline scripts, stylesheets,
and scripting events.</td></tr>
<tr class="odd"><td><a href="mod_proxy_html.html#proxyhtmlfixups">ProxyHTMLFixups [lowercase] [dospath] [reset]</a></td><td></td><td>svd</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Fixes for simple HTML errors.</td></tr>
<tr><td><a href="mod_proxy_html.html#proxyhtmlinterp">ProxyHTMLInterp On|Off</a></td><td> Off </td><td>svd</td><td>B</td></tr><tr><td class="descr" colspan="4">Enables per-request interpolation of
<code class="directive">ProxyHTMLURLMap</code> rules.</td></tr>
<tr class="odd"><td><a href="mod_proxy_html.html#proxyhtmllinks">ProxyHTMLLinks <var>element attribute [attribute2 ...]</var></a></td><td></td><td>svd</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Specify HTML elements that have URL attributes to be rewritten.</td></tr>
<tr><td><a href="mod_proxy_html.html#proxyhtmlmeta">ProxyHTMLMeta On|Off</a></td><td> Off </td><td>svd</td><td>B</td></tr><tr><td class="descr" colspan="4">Turns on or off extra pre-parsing of metadata in HTML
<code>&lt;head&gt;</code> sections.</td></tr>
<tr class="odd"><td><a href="mod_proxy_html.html#proxyhtmlstripcomments">ProxyHTMLStripComments On|Off</a></td><td> Off </td><td>svd</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Determines whether to strip HTML comments.</td></tr>
<tr><td><a href="mod_proxy_html.html#proxyhtmlurlmap">ProxyHTMLURLMap <var>from-pattern to-pattern [flags] [cond]</var></a></td><td></td><td>svd</td><td>B</td></tr><tr><td class="descr" colspan="4">Defines a rule to rewrite HTML links</td></tr>
<tr class="odd"><td><a href="mod_proxy.html#proxyiobuffersize">ProxyIOBufferSize <var>bytes</var></a></td><td> 8192 </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Determine size of internal data throughput buffer</td></tr>
<tr><td><a href="mod_proxy.html#proxymatch">&lt;ProxyMatch <var>regex</var>&gt; ...&lt;/ProxyMatch&gt;</a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Container for directives applied to regular-expression-matched
proxied resources</td></tr>
<tr class="odd"><td><a href="mod_proxy.html#proxymaxforwards">ProxyMaxForwards <var>number</var></a></td><td> -1 </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Maximium number of proxies that a request can be forwarded
through</td></tr>
<tr><td><a href="mod_proxy.html#proxypass">ProxyPass [<var>path</var>] !|<var>url</var> [<var>key=value</var>
  <var>[key=value</var> ...]] [nocanon] [interpolate] [noquery]</a></td><td></td><td>svd</td><td>E</td></tr><tr><td class="descr" colspan="4">Maps remote servers into the local server URL-space</td></tr>
<tr class="odd"><td><a href="mod_proxy.html#proxypassinherit">ProxyPassInherit On|Off</a></td><td> On </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Inherit ProxyPass directives defined from the main server</td></tr>
<tr><td><a href="mod_proxy.html#proxypassinterpolateenv">ProxyPassInterpolateEnv On|Off</a></td><td> Off </td><td>svd</td><td>E</td></tr><tr><td class="descr" colspan="4">Enable Environment Variable interpolation in Reverse Proxy configurations</td></tr>
<tr class="odd"><td><a href="mod_proxy.html#proxypassmatch">ProxyPassMatch [<var>regex</var>] !|<var>url</var> [<var>key=value</var>
	<var>[key=value</var> ...]]</a></td><td></td><td>svd</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Maps remote servers into the local server URL-space using regular expressions</td></tr>
<tr><td><a href="mod_proxy.html#proxypassreverse">ProxyPassReverse [<var>path</var>] <var>url</var>
[<var>interpolate</var>]</a></td><td></td><td>svd</td><td>E</td></tr><tr><td class="descr" colspan="4">Adjusts the URL in HTTP response headers sent from a reverse
proxied server</td></tr>
<tr class="odd"><td><a href="mod_proxy.html#proxypassreversecookiedomain">ProxyPassReverseCookieDomain <var>internal-domain</var>
<var>public-domain</var> [<var>interpolate</var>]</a></td><td></td><td>svd</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Adjusts the Domain string in Set-Cookie headers from a reverse-
proxied server</td></tr>
<tr><td><a href="mod_proxy.html#proxypassreversecookiepath">ProxyPassReverseCookiePath <var>internal-path</var>
<var>public-path</var> [<var>interpolate</var>]</a></td><td></td><td>svd</td><td>E</td></tr><tr><td class="descr" colspan="4">Adjusts the Path string in Set-Cookie headers from a reverse-
proxied server</td></tr>
<tr class="odd"><td><a href="mod_proxy.html#proxypreservehost">ProxyPreserveHost On|Off</a></td><td> Off </td><td>svd</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Use incoming Host HTTP request header for proxy
request</td></tr>
<tr><td><a href="mod_proxy.html#proxyreceivebuffersize">ProxyReceiveBufferSize <var>bytes</var></a></td><td> 0 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Network buffer size for proxied HTTP and FTP
connections</td></tr>
<tr class="odd"><td><a href="mod_proxy.html#proxyremote">ProxyRemote <var>match</var> <var>remote-server</var></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Remote proxy used to handle certain requests</td></tr>
<tr><td><a href="mod_proxy.html#proxyremotematch">ProxyRemoteMatch <var>regex</var> <var>remote-server</var></a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Remote proxy used to handle requests matched by regular
expressions</td></tr>
<tr class="odd"><td><a href="mod_proxy.html#proxyrequests">ProxyRequests On|Off</a></td><td> Off </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Enables forward (standard) proxy requests</td></tr>
<tr><td><a href="mod_proxy_scgi.html#proxyscgiinternalredirect">ProxySCGIInternalRedirect On|Off|<var>Headername</var></a></td><td> On </td><td>svd</td><td>E</td></tr><tr><td class="descr" colspan="4">Enable or disable internal redirect responses from the
backend</td></tr>
<tr class="odd"><td><a href="mod_proxy_scgi.html#proxyscgisendfile">ProxySCGISendfile On|Off|<var>Headername</var></a></td><td> Off </td><td>svd</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Enable evaluation of <var>X-Sendfile</var> pseudo response
header</td></tr>
<tr><td><a href="mod_proxy.html#proxyset">ProxySet <var>url</var> <var>key=value [key=value ...]</var></a></td><td></td><td>svd</td><td>E</td></tr><tr><td class="descr" colspan="4">Set various Proxy balancer or member parameters</td></tr>
<tr class="odd"><td><a href="mod_proxy.html#proxysourceaddress">ProxySourceAddress <var>address</var></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Set local IP address for outgoing proxy connections</td></tr>
<tr><td><a href="mod_proxy.html#proxystatus">ProxyStatus Off|On|Full</a></td><td> Off </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Show Proxy LoadBalancer status in mod_status</td></tr>
<tr class="odd"><td><a href="mod_proxy.html#proxytimeout">ProxyTimeout <var>seconds</var></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Network timeout for proxied requests</td></tr>
<tr><td><a href="mod_proxy.html#proxyvia">ProxyVia On|Off|Full|Block</a></td><td> Off </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Information provided in the <code>Via</code> HTTP response
header for proxied requests</td></tr>
<tr class="odd"><td><a href="core.html#qualifyredirecturl" id="Q" name="Q">QualifyRedirectURL ON|OFF</a></td><td> OFF </td><td>svd</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Controls whether the REDIRECT_URL environment variable is
             fully qualified</td></tr>
<tr><td><a href="mod_autoindex.html#readmename" id="R" name="R">ReadmeName <var>filename</var></a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Name of the file that will be inserted at the end
of the index listing</td></tr>
<tr class="odd"><td><a href="mpm_common.html#receivebuffersize">ReceiveBufferSize <var>bytes</var></a></td><td> 0 </td><td>s</td><td>M</td></tr><tr class="odd"><td class="descr" colspan="4">TCP receive buffer size</td></tr>
<tr><td><a href="mod_alias.html#redirect">Redirect [<var>status</var>] [<var>URL-path</var>]
<var>URL</var></a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Sends an external redirect asking the client to fetch
a different URL</td></tr>
<tr class="odd"><td><a href="mod_alias.html#redirectmatch">RedirectMatch [<var>status</var>] <var>regex</var>
<var>URL</var></a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Sends an external redirect based on a regular expression match
of the current URL</td></tr>
<tr><td><a href="mod_alias.html#redirectpermanent">RedirectPermanent <var>URL-path</var> <var>URL</var></a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Sends an external permanent redirect asking the client to fetch
a different URL</td></tr>
<tr class="odd"><td><a href="mod_alias.html#redirecttemp">RedirectTemp <var>URL-path</var> <var>URL</var></a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Sends an external temporary redirect asking the client to fetch
a different URL</td></tr>
<tr><td><a href="mod_reflector.html#reflectorheader">ReflectorHeader <var>inputheader</var> <var>[outputheader]</var></a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Reflect an input header to the output headers</td></tr>
<tr class="odd"><td><a href="core.html#regexdefaultoptions">RegexDefaultOptions [none] [+|-]<var>option</var> [[+|-]<var>option</var>] ...</a></td><td> DOLLAR_ENDONLY </td><td>s</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Allow to configure global/default options for regexes</td></tr>
<tr><td><a href="core.html#registerhttpmethod">RegisterHttpMethod <var>method</var> [<var>method</var> [...]]</a></td><td></td><td>s</td><td>C</td></tr><tr><td class="descr" colspan="4">Register non-standard HTTP methods</td></tr>
<tr class="odd"><td><a href="mod_remoteip.html#remoteipheader">RemoteIPHeader <var>header-field</var></a></td><td></td><td>sv</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Declare the header field which should be parsed for useragent IP addresses</td></tr>
<tr><td><a href="mod_remoteip.html#remoteipinternalproxy">RemoteIPInternalProxy <var>proxy-ip</var>|<var>proxy-ip/subnet</var>|<var>hostname</var> ...</a></td><td></td><td>sv</td><td>B</td></tr><tr><td class="descr" colspan="4">Declare client intranet IP addresses trusted to present the RemoteIPHeader value</td></tr>
<tr class="odd"><td><a href="mod_remoteip.html#remoteipinternalproxylist">RemoteIPInternalProxyList <var>filename</var></a></td><td></td><td>sv</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Declare client intranet IP addresses trusted to present the RemoteIPHeader value</td></tr>
<tr><td><a href="mod_remoteip.html#remoteipproxiesheader">RemoteIPProxiesHeader <var>HeaderFieldName</var></a></td><td></td><td>sv</td><td>B</td></tr><tr><td class="descr" colspan="4">Declare the header field which will record all intermediate IP addresses</td></tr>
<tr class="odd"><td><a href="mod_remoteip.html#remoteipproxyprotocol">RemoteIPProxyProtocol On|Off</a></td><td></td><td>sv</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Enable or disable PROXY protocol handling</td></tr>
<tr><td><a href="mod_remoteip.html#remoteipproxyprotocolexceptions">RemoteIPProxyProtocolExceptions host|range [host|range] [host|range]</a></td><td></td><td>sv</td><td>B</td></tr><tr><td class="descr" colspan="4">Disable processing of PROXY header for certain hosts or networks</td></tr>
<tr class="odd"><td><a href="mod_remoteip.html#remoteiptrustedproxy">RemoteIPTrustedProxy <var>proxy-ip</var>|<var>proxy-ip/subnet</var>|<var>hostname</var> ...</a></td><td></td><td>sv</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Declare client intranet IP addresses trusted to present the RemoteIPHeader value</td></tr>
<tr><td><a href="mod_remoteip.html#remoteiptrustedproxylist">RemoteIPTrustedProxyList <var>filename</var></a></td><td></td><td>sv</td><td>B</td></tr><tr><td class="descr" colspan="4">Declare client intranet IP addresses trusted to present the RemoteIPHeader value</td></tr>
<tr class="odd"><td><a href="mod_mime.html#removecharset">RemoveCharset <var>extension</var> [<var>extension</var>]
...</a></td><td></td><td>vdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Removes any character set associations for a set of file
extensions</td></tr>
<tr><td><a href="mod_mime.html#removeencoding">RemoveEncoding <var>extension</var> [<var>extension</var>]
...</a></td><td></td><td>vdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Removes any content encoding associations for a set of file
extensions</td></tr>
<tr class="odd"><td><a href="mod_mime.html#removehandler">RemoveHandler <var>extension</var> [<var>extension</var>]
...</a></td><td></td><td>vdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Removes any handler associations for a set of file
extensions</td></tr>
<tr><td><a href="mod_mime.html#removeinputfilter">RemoveInputFilter <var>extension</var> [<var>extension</var>]
...</a></td><td></td><td>vdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Removes any input filter associations for a set of file
extensions</td></tr>
<tr class="odd"><td><a href="mod_mime.html#removelanguage">RemoveLanguage <var>extension</var> [<var>extension</var>]
...</a></td><td></td><td>vdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Removes any language associations for a set of file
extensions</td></tr>
<tr><td><a href="mod_mime.html#removeoutputfilter">RemoveOutputFilter <var>extension</var> [<var>extension</var>]
...</a></td><td></td><td>vdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Removes any output filter associations for a set of file
extensions</td></tr>
<tr class="odd"><td><a href="mod_mime.html#removetype">RemoveType <var>extension</var> [<var>extension</var>]
...</a></td><td></td><td>vdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Removes any content type associations for a set of file
extensions</td></tr>
<tr><td><a href="mod_headers.html#requestheader">RequestHeader add|append|edit|edit*|merge|set|setifempty|unset
<var>header</var> [[expr=]<var>value</var> [<var>replacement</var>]
[early|env=[!]<var>varname</var>|expr=<var>expression</var>]]
</a></td><td></td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Configure HTTP request headers</td></tr>
<tr class="odd"><td><a href="mod_reqtimeout.html#requestreadtimeout">RequestReadTimeout
[header=<var>timeout</var>[-<var>maxtimeout</var>][,MinRate=<var>rate</var>]
[body=<var>timeout</var>[-<var>maxtimeout</var>][,MinRate=<var>rate</var>]
</a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Set timeout values for receiving request headers and body from client.
</td></tr>
<tr><td><a href="mod_authz_core.html#require">Require [not] <var>entity-name</var>
    [<var>entity-name</var>] ...</a></td><td></td><td>dh</td><td>B</td></tr><tr><td class="descr" colspan="4">Tests whether an authenticated user is authorized by
an authorization provider.</td></tr>
<tr class="odd"><td><a href="mod_authz_core.html#requireall">&lt;RequireAll&gt; ... &lt;/RequireAll&gt;</a></td><td></td><td>dh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Enclose a group of authorization directives of which none
must fail and at least one must succeed for the enclosing directive to
succeed.</td></tr>
<tr><td><a href="mod_authz_core.html#requireany">&lt;RequireAny&gt; ... &lt;/RequireAny&gt;</a></td><td></td><td>dh</td><td>B</td></tr><tr><td class="descr" colspan="4">Enclose a group of authorization directives of which one
must succeed for the enclosing directive to succeed.</td></tr>
<tr class="odd"><td><a href="mod_authz_core.html#requirenone">&lt;RequireNone&gt; ... &lt;/RequireNone&gt;</a></td><td></td><td>dh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Enclose a group of authorization directives of which none
must succeed for the enclosing directive to not fail.</td></tr>
<tr><td><a href="mod_rewrite.html#rewritebase">RewriteBase <em>URL-path</em></a></td><td></td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">Sets the base URL for per-directory rewrites</td></tr>
<tr class="odd"><td><a href="mod_rewrite.html#rewritecond"> RewriteCond
      <em>TestString</em> <em>CondPattern</em> [<em>flags</em>]</a></td><td></td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Defines a condition under which rewriting will take place
</td></tr>
<tr><td><a href="mod_rewrite.html#rewriteengine">RewriteEngine on|off</a></td><td> off </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Enables or disables runtime rewriting engine</td></tr>
<tr class="odd"><td><a href="mod_rewrite.html#rewritemap">RewriteMap <em>MapName</em> <em>MapType</em>:<em>MapSource</em>
    [<em>MapTypeOptions</em>]
</a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Defines a mapping function for key-lookup</td></tr>
<tr><td><a href="mod_rewrite.html#rewriteoptions">RewriteOptions <var>Options</var></a></td><td></td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Sets some special options for the rewrite engine</td></tr>
<tr class="odd"><td><a href="mod_rewrite.html#rewriterule">RewriteRule
      <em>Pattern</em> <em>Substitution</em> [<em>flags</em>]</a></td><td></td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Defines rules for the rewriting engine</td></tr>
<tr><td><a href="core.html#rlimitcpu">RLimitCPU <var>seconds</var>|max [<var>seconds</var>|max]</a></td><td></td><td>svdh</td><td>C</td></tr><tr><td class="descr" colspan="4">Limits the CPU consumption of processes launched
by Apache httpd children</td></tr>
<tr class="odd"><td><a href="core.html#rlimitmem">RLimitMEM <var>bytes</var>|max [<var>bytes</var>|max]</a></td><td></td><td>svdh</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Limits the memory consumption of processes launched
by Apache httpd children</td></tr>
<tr><td><a href="core.html#rlimitnproc">RLimitNPROC <var>number</var>|max [<var>number</var>|max]</a></td><td></td><td>svdh</td><td>C</td></tr><tr><td class="descr" colspan="4">Limits the number of processes that can be launched by
processes launched by Apache httpd children</td></tr>
<tr class="odd"><td><a href="mod_access_compat.html#satisfy" id="S" name="S">Satisfy Any|All</a></td><td> All </td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Interaction between host-level access control and
user authentication</td></tr>
<tr><td><a href="mpm_common.html#scoreboardfile">ScoreBoardFile <var>file-path</var></a></td><td> logs/apache_runtime +</td><td>s</td><td>M</td></tr><tr><td class="descr" colspan="4">Location of the file used to store coordination data for
the child processes</td></tr>
<tr class="odd"><td><a href="mod_actions.html#script">Script <var>method</var> <var>cgi-script</var></a></td><td></td><td>svd</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Activates a CGI script for a particular request
method.</td></tr>
<tr><td><a href="mod_alias.html#scriptalias">ScriptAlias [<var>URL-path</var>]
<var>file-path</var>|<var>directory-path</var></a></td><td></td><td>svd</td><td>B</td></tr><tr><td class="descr" colspan="4">Maps a URL to a filesystem location and designates the
target as a CGI script</td></tr>
<tr class="odd"><td><a href="mod_alias.html#scriptaliasmatch">ScriptAliasMatch <var>regex</var>
<var>file-path</var>|<var>directory-path</var></a></td><td></td><td>sv</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Maps a URL to a filesystem location using a regular expression
and designates the target as a CGI script</td></tr>
<tr><td><a href="core.html#scriptinterpretersource">ScriptInterpreterSource Registry|Registry-Strict|Script</a></td><td> Script </td><td>svdh</td><td>C</td></tr><tr><td class="descr" colspan="4">Technique for locating the interpreter for CGI
scripts</td></tr>
<tr class="odd"><td><a href="mod_cgi.html#scriptlog">ScriptLog <var>file-path</var></a></td><td></td><td>sv</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Location of the CGI script error logfile</td></tr>
<tr><td><a href="mod_cgi.html#scriptlogbuffer">ScriptLogBuffer <var>bytes</var></a></td><td> 1024 </td><td>sv</td><td>B</td></tr><tr><td class="descr" colspan="4">Maximum amount of PUT or POST requests that will be recorded
in the scriptlog</td></tr>
<tr class="odd"><td><a href="mod_cgi.html#scriptloglength">ScriptLogLength <var>bytes</var></a></td><td> 10385760 </td><td>sv</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Size limit of the CGI script logfile</td></tr>
<tr><td><a href="mod_cgid.html#scriptsock">ScriptSock <var>file-path</var></a></td><td> cgisock </td><td>s</td><td>B</td></tr><tr><td class="descr" colspan="4">The filename prefix of the socket to use for communication with
the cgi daemon</td></tr>
<tr class="odd"><td><a href="mod_nw_ssl.html#securelisten">SecureListen [<var>IP-address</var>:]<var>portnumber</var>
<var>Certificate-Name</var> [MUTUAL]</a></td><td></td><td>s</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Enables SSL encryption for the specified port</td></tr>
<tr><td><a href="core.html#seerequesttail">SeeRequestTail On|Off</a></td><td> Off </td><td>s</td><td>C</td></tr><tr><td class="descr" colspan="4">Determine if mod_status displays the first 63 characters
of a request or the last 63, assuming the request itself is greater than
63 chars.</td></tr>
<tr class="odd"><td><a href="mpm_common.html#sendbuffersize">SendBufferSize <var>bytes</var></a></td><td> 0 </td><td>s</td><td>M</td></tr><tr class="odd"><td class="descr" colspan="4">TCP buffer size</td></tr>
<tr><td><a href="core.html#serveradmin">ServerAdmin <var>email-address</var>|<var>URL</var></a></td><td></td><td>sv</td><td>C</td></tr><tr><td class="descr" colspan="4">Email address that the server includes in error
messages sent to the client</td></tr>
<tr class="odd"><td><a href="core.html#serveralias">ServerAlias <var>hostname</var> [<var>hostname</var>] ...</a></td><td></td><td>v</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Alternate names for a host used when matching requests
to name-virtual hosts</td></tr>
<tr><td><a href="mpm_common.html#serverlimit">ServerLimit <var>number</var></a></td><td></td><td>s</td><td>M</td></tr><tr><td class="descr" colspan="4">Upper limit on configurable number of processes</td></tr>
<tr class="odd"><td><a href="core.html#servername">ServerName [<var>scheme</var>://]<var>fully-qualified-domain-name</var>[:<var>port</var>]</a></td><td></td><td>sv</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Hostname and port that the server uses to identify
itself</td></tr>
<tr><td><a href="core.html#serverpath">ServerPath <var>URL-path</var></a></td><td></td><td>v</td><td>C</td></tr><tr><td class="descr" colspan="4">Legacy URL pathname for a name-based virtual host that
is accessed by an incompatible browser</td></tr>
<tr class="odd"><td><a href="core.html#serverroot">ServerRoot <var>directory-path</var></a></td><td> /usr/local/apache </td><td>s</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Base directory for the server installation</td></tr>
<tr><td><a href="core.html#serversignature">ServerSignature On|Off|EMail</a></td><td> Off </td><td>svdh</td><td>C</td></tr><tr><td class="descr" colspan="4">Configures the footer on server-generated documents</td></tr>
<tr class="odd"><td><a href="core.html#servertokens">ServerTokens Major|Minor|Min[imal]|Prod[uctOnly]|OS|Full</a></td><td> Full </td><td>s</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Configures the <code>Server</code> HTTP response
header</td></tr>
<tr><td><a href="mod_session.html#session">Session On|Off</a></td><td> Off </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Enables a session for the current directory or location</td></tr>
<tr class="odd"><td><a href="mod_session_cookie.html#sessioncookiename">SessionCookieName <var>name</var> <var>attributes</var></a></td><td></td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Name and attributes for the RFC2109 cookie storing the session</td></tr>
<tr><td><a href="mod_session_cookie.html#sessioncookiename2">SessionCookieName2 <var>name</var> <var>attributes</var></a></td><td></td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Name and attributes for the RFC2965 cookie storing the session</td></tr>
<tr class="odd"><td><a href="mod_session_cookie.html#sessioncookieremove">SessionCookieRemove On|Off</a></td><td> Off </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Control for whether session cookies should be removed from incoming HTTP headers</td></tr>
<tr><td><a href="mod_session_crypto.html#sessioncryptocipher">SessionCryptoCipher <var>name</var></a></td><td></td><td>svdh</td><td>X</td></tr><tr><td class="descr" colspan="4">The crypto cipher to be used to encrypt the session</td></tr>
<tr class="odd"><td><a href="mod_session_crypto.html#sessioncryptodriver">SessionCryptoDriver <var>name</var> <var>[param[=value]]</var></a></td><td></td><td>s</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">The crypto driver to be used to encrypt the session</td></tr>
<tr><td><a href="mod_session_crypto.html#sessioncryptopassphrase">SessionCryptoPassphrase <var>secret</var> [ <var>secret</var> ... ] </a></td><td></td><td>svdh</td><td>X</td></tr><tr><td class="descr" colspan="4">The key used to encrypt the session</td></tr>
<tr class="odd"><td><a href="mod_session_crypto.html#sessioncryptopassphrasefile">SessionCryptoPassphraseFile <var>filename</var></a></td><td></td><td>svd</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">File containing keys used to encrypt the session</td></tr>
<tr><td><a href="mod_session_dbd.html#sessiondbdcookiename">SessionDBDCookieName <var>name</var> <var>attributes</var></a></td><td></td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Name and attributes for the RFC2109 cookie storing the session ID</td></tr>
<tr class="odd"><td><a href="mod_session_dbd.html#sessiondbdcookiename2">SessionDBDCookieName2 <var>name</var> <var>attributes</var></a></td><td></td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Name and attributes for the RFC2965 cookie storing the session ID</td></tr>
<tr><td><a href="mod_session_dbd.html#sessiondbdcookieremove">SessionDBDCookieRemove On|Off</a></td><td> On </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Control for whether session ID cookies should be removed from incoming HTTP headers</td></tr>
<tr class="odd"><td><a href="mod_session_dbd.html#sessiondbddeletelabel">SessionDBDDeleteLabel <var>label</var></a></td><td> deletesession </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">The SQL query to use to remove sessions from the database</td></tr>
<tr><td><a href="mod_session_dbd.html#sessiondbdinsertlabel">SessionDBDInsertLabel <var>label</var></a></td><td> insertsession </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">The SQL query to use to insert sessions into the database</td></tr>
<tr class="odd"><td><a href="mod_session_dbd.html#sessiondbdperuser">SessionDBDPerUser On|Off</a></td><td> Off </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Enable a per user session</td></tr>
<tr><td><a href="mod_session_dbd.html#sessiondbdselectlabel">SessionDBDSelectLabel <var>label</var></a></td><td> selectsession </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">The SQL query to use to select sessions from the database</td></tr>
<tr class="odd"><td><a href="mod_session_dbd.html#sessiondbdupdatelabel">SessionDBDUpdateLabel <var>label</var></a></td><td> updatesession </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">The SQL query to use to update existing sessions in the database</td></tr>
<tr><td><a href="mod_session.html#sessionenv">SessionEnv On|Off</a></td><td> Off </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Control whether the contents of the session are written to the
<var>HTTP_SESSION</var> environment variable</td></tr>
<tr class="odd"><td><a href="mod_session.html#sessionexclude">SessionExclude <var>path</var></a></td><td></td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Define URL prefixes for which a session is ignored</td></tr>
<tr><td><a href="mod_session.html#sessionheader">SessionHeader <var>header</var></a></td><td></td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Import session updates from a given HTTP response header</td></tr>
<tr class="odd"><td><a href="mod_session.html#sessioninclude">SessionInclude <var>path</var></a></td><td></td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Define URL prefixes for which a session is valid</td></tr>
<tr><td><a href="mod_session.html#sessionmaxage">SessionMaxAge <var>maxage</var></a></td><td> 0 </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Define a maximum age in seconds for a session</td></tr>
<tr class="odd"><td><a href="mod_env.html#setenv">SetEnv <var>env-variable</var> [<var>value</var>]</a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Sets environment variables</td></tr>
<tr><td><a href="mod_setenvif.html#setenvif">SetEnvIf <em>attribute
    regex [!]env-variable</em>[=<em>value</em>]
    [[!]<em>env-variable</em>[=<em>value</em>]] ...</a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Sets environment variables based on attributes of the request
</td></tr>
<tr class="odd"><td><a href="mod_setenvif.html#setenvifexpr">SetEnvIfExpr <em>expr
    [!]env-variable</em>[=<em>value</em>]
    [[!]<em>env-variable</em>[=<em>value</em>]] ...</a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Sets environment variables based on an ap_expr expression</td></tr>
<tr><td><a href="mod_setenvif.html#setenvifnocase">SetEnvIfNoCase <em>attribute regex
        [!]env-variable</em>[=<em>value</em>]
    [[!]<em>env-variable</em>[=<em>value</em>]] ...</a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Sets environment variables based on attributes of the request
without respect to case</td></tr>
<tr class="odd"><td><a href="core.html#sethandler">SetHandler <var>handler-name</var>|None</a></td><td></td><td>svdh</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Forces all matching files to be processed by a
handler</td></tr>
<tr><td><a href="core.html#setinputfilter">SetInputFilter <var>filter</var>[;<var>filter</var>...]</a></td><td></td><td>svdh</td><td>C</td></tr><tr><td class="descr" colspan="4">Sets the filters that will process client requests and POST
input</td></tr>
<tr class="odd"><td><a href="core.html#setoutputfilter">SetOutputFilter <var>filter</var>[;<var>filter</var>...]</a></td><td></td><td>svdh</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Sets the filters that will process responses from the
server</td></tr>
<tr><td><a href="mod_include.html#ssiendtag">SSIEndTag <var>tag</var></a></td><td> "--&gt;" </td><td>sv</td><td>B</td></tr><tr><td class="descr" colspan="4">String that ends an include element</td></tr>
<tr class="odd"><td><a href="mod_include.html#ssierrormsg">SSIErrorMsg <var>message</var></a></td><td> "[an error occurred +</td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Error message displayed when there is an SSI
error</td></tr>
<tr><td><a href="mod_include.html#ssietag">SSIETag on|off</a></td><td> off </td><td>dh</td><td>B</td></tr><tr><td class="descr" colspan="4">Controls whether ETags are generated by the server.</td></tr>
<tr class="odd"><td><a href="mod_include.html#ssilastmodified">SSILastModified on|off</a></td><td> off </td><td>dh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Controls whether <code>Last-Modified</code> headers are generated by the
server.</td></tr>
<tr><td><a href="mod_include.html#ssilegacyexprparser">SSILegacyExprParser on|off</a></td><td> off </td><td>dh</td><td>B</td></tr><tr><td class="descr" colspan="4">Enable compatibility mode for conditional expressions.</td></tr>
<tr class="odd"><td><a href="mod_include.html#ssistarttag">SSIStartTag <var>tag</var></a></td><td> "&lt;!--#" </td><td>sv</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">String that starts an include element</td></tr>
<tr><td><a href="mod_include.html#ssitimeformat">SSITimeFormat <var>formatstring</var></a></td><td> "%A, %d-%b-%Y %H:%M +</td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Configures the format in which date strings are
displayed</td></tr>
<tr class="odd"><td><a href="mod_include.html#ssiundefinedecho">SSIUndefinedEcho <var>string</var></a></td><td> "(none)" </td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">String displayed when an unset variable is echoed</td></tr>
<tr><td><a href="mod_ssl.html#sslcacertificatefile">SSLCACertificateFile <em>file-path</em></a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">File of concatenated PEM-encoded CA Certificates
for Client Auth</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslcacertificatepath">SSLCACertificatePath <em>directory-path</em></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Directory of PEM-encoded CA Certificates for
Client Auth</td></tr>
<tr><td><a href="mod_ssl.html#sslcadnrequestfile">SSLCADNRequestFile <em>file-path</em></a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">File of concatenated PEM-encoded CA Certificates
for defining acceptable CA names</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslcadnrequestpath">SSLCADNRequestPath <em>directory-path</em></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Directory of PEM-encoded CA Certificates for
defining acceptable CA names</td></tr>
<tr><td><a href="mod_ssl.html#sslcarevocationcheck">SSLCARevocationCheck chain|leaf|none <em>flag</em>s</a></td><td> none </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Enable CRL-based revocation checking</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslcarevocationfile">SSLCARevocationFile <em>file-path</em></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">File of concatenated PEM-encoded CA CRLs for
Client Auth</td></tr>
<tr><td><a href="mod_ssl.html#sslcarevocationpath">SSLCARevocationPath <em>directory-path</em></a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Directory of PEM-encoded CA CRLs for
Client Auth</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslcertificatechainfile">SSLCertificateChainFile <em>file-path</em></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">File of PEM-encoded Server CA Certificates</td></tr>
<tr><td><a href="mod_ssl.html#sslcertificatefile">SSLCertificateFile <em>file-path</em></a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Server PEM-encoded X.509 certificate data file</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslcertificatekeyfile">SSLCertificateKeyFile <em>file-path</em></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Server PEM-encoded private key file</td></tr>
<tr><td><a href="mod_ssl.html#sslciphersuite">SSLCipherSuite <em>cipher-spec</em></a></td><td> DEFAULT (depends on +</td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Cipher Suite available for negotiation in SSL
handshake</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslcompression">SSLCompression on|off</a></td><td> off </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Enable compression on the SSL level</td></tr>
<tr><td><a href="mod_ssl.html#sslcryptodevice">SSLCryptoDevice <em>engine</em></a></td><td> builtin </td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">Enable use of a cryptographic hardware accelerator</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslengine">SSLEngine on|off|optional</a></td><td> off </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">SSL Engine Operation Switch</td></tr>
<tr><td><a href="mod_ssl.html#sslfips">SSLFIPS on|off</a></td><td> off </td><td>s</td><td>E</td></tr><tr><td class="descr" colspan="4">SSL FIPS mode Switch</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslhonorcipherorder">SSLHonorCipherOrder on|off</a></td><td> off </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Option to prefer the server's cipher preference order</td></tr>
<tr><td><a href="mod_ssl.html#sslinsecurerenegotiation">SSLInsecureRenegotiation on|off</a></td><td> off </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Option to enable support for insecure renegotiation</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslocspdefaultresponder">SSLOCSDefaultResponder <em>uri</em></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Set the default responder URI for OCSP validation</td></tr>
<tr><td><a href="mod_ssl.html#sslocspenable">SSLOCSPEnable on|leaf|off</a></td><td> off </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Enable OCSP validation of the client certificate chain</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslocspnoverify">SSLOCSPNoverify <em>On/Off</em></a></td><td> Off </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">skip the OCSP responder certificates verification</td></tr>
<tr><td><a href="mod_ssl.html#sslocspoverrideresponder">SSLOCSPOverrideResponder on|off</a></td><td> off </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Force use of the default responder URI for OCSP validation</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslocspproxyurl">SSLOCSPProxyURL <em>url</em></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Proxy URL to use for OCSP requests</td></tr>
<tr><td><a href="mod_ssl.html#sslocsprespondercertificatefile">SSLOCSPResponderCertificateFile <em>file</em></a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Set of trusted PEM encoded OCSP responder certificates</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslocsprespondertimeout">SSLOCSPResponderTimeout <em>seconds</em></a></td><td> 10 </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Timeout for OCSP queries</td></tr>
<tr><td><a href="mod_ssl.html#sslocspresponsemaxage">SSLOCSPResponseMaxAge <em>seconds</em></a></td><td> -1 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Maximum allowable age for OCSP responses</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslocspresponsetimeskew">SSLOCSPResponseTimeSkew <em>seconds</em></a></td><td> 300 </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Maximum allowable time skew for OCSP response validation</td></tr>
<tr><td><a href="mod_ssl.html#sslocspuserequestnonce">SSLOCSPUseRequestNonce on|off</a></td><td> on </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Use a nonce within OCSP queries</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslopensslconfcmd">SSLOpenSSLConfCmd <em>command-name</em> <em>command-value</em></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Configure OpenSSL parameters through its <em>SSL_CONF</em> API</td></tr>
<tr><td><a href="mod_ssl.html#ssloptions">SSLOptions [+|-]<em>option</em> ...</a></td><td></td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Configure various SSL engine run-time options</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslpassphrasedialog">SSLPassPhraseDialog <em>type</em></a></td><td> builtin </td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Type of pass phrase dialog for encrypted private
keys</td></tr>
<tr><td><a href="mod_ssl.html#sslprotocol">SSLProtocol [+|-]<em>protocol</em> ...</a></td><td> all -SSLv3 (up to 2 +</td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Configure usable SSL/TLS protocol versions</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslproxycacertificatefile">SSLProxyCACertificateFile <em>file-path</em></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">File of concatenated PEM-encoded CA Certificates
for Remote Server Auth</td></tr>
<tr><td><a href="mod_ssl.html#sslproxycacertificatepath">SSLProxyCACertificatePath <em>directory-path</em></a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Directory of PEM-encoded CA Certificates for
Remote Server Auth</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslproxycarevocationcheck">SSLProxyCARevocationCheck chain|leaf|none</a></td><td> none </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Enable CRL-based revocation checking for Remote Server Auth</td></tr>
<tr><td><a href="mod_ssl.html#sslproxycarevocationfile">SSLProxyCARevocationFile <em>file-path</em></a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">File of concatenated PEM-encoded CA CRLs for
Remote Server Auth</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslproxycarevocationpath">SSLProxyCARevocationPath <em>directory-path</em></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Directory of PEM-encoded CA CRLs for
Remote Server Auth</td></tr>
<tr><td><a href="mod_ssl.html#sslproxycheckpeercn">SSLProxyCheckPeerCN on|off</a></td><td> on </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Whether to check the remote server certificate's CN field
</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslproxycheckpeerexpire">SSLProxyCheckPeerExpire on|off</a></td><td> on </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Whether to check if remote server certificate is expired
</td></tr>
<tr><td><a href="mod_ssl.html#sslproxycheckpeername">SSLProxyCheckPeerName on|off</a></td><td> on </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Configure host name checking for remote server certificates
</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslproxyciphersuite">SSLProxyCipherSuite <em>cipher-spec</em></a></td><td> ALL:!ADH:RC4+RSA:+H +</td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Cipher Suite available for negotiation in SSL
proxy handshake</td></tr>
<tr><td><a href="mod_ssl.html#sslproxyengine">SSLProxyEngine on|off</a></td><td> off </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">SSL Proxy Engine Operation Switch</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslproxymachinecertificatechainfile">SSLProxyMachineCertificateChainFile <em>filename</em></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">File of concatenated PEM-encoded CA certificates to be used by the proxy for choosing a certificate</td></tr>
<tr><td><a href="mod_ssl.html#sslproxymachinecertificatefile">SSLProxyMachineCertificateFile <em>filename</em></a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">File of concatenated PEM-encoded client certificates and keys to be used by the proxy</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslproxymachinecertificatepath">SSLProxyMachineCertificatePath <em>directory</em></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Directory of PEM-encoded client certificates and keys to be used by the proxy</td></tr>
<tr><td><a href="mod_ssl.html#sslproxyprotocol">SSLProxyProtocol [+|-]<em>protocol</em> ...</a></td><td> all -SSLv3 (up to 2 +</td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Configure usable SSL protocol flavors for proxy usage</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslproxyverify">SSLProxyVerify <em>level</em></a></td><td> none </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Type of remote server Certificate verification</td></tr>
<tr><td><a href="mod_ssl.html#sslproxyverifydepth">SSLProxyVerifyDepth <em>number</em></a></td><td> 1 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Maximum depth of CA Certificates in Remote Server
Certificate verification</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslrandomseed">SSLRandomSeed <em>context</em> <em>source</em>
[<em>bytes</em>]</a></td><td></td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Pseudo Random Number Generator (PRNG) seeding
source</td></tr>
<tr><td><a href="mod_ssl.html#sslrenegbuffersize">SSLRenegBufferSize <var>bytes</var></a></td><td> 131072 </td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">Set the size for the SSL renegotiation buffer</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslrequire">SSLRequire <em>expression</em></a></td><td></td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Allow access only when an arbitrarily complex
boolean expression is true</td></tr>
<tr><td><a href="mod_ssl.html#sslrequiressl">SSLRequireSSL</a></td><td></td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">Deny access when SSL is not used for the
HTTP request</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslsessioncache">SSLSessionCache <em>type</em></a></td><td> none </td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Type of the global/inter-process SSL Session
Cache</td></tr>
<tr><td><a href="mod_ssl.html#sslsessioncachetimeout">SSLSessionCacheTimeout <em>seconds</em></a></td><td> 300 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Number of seconds before an SSL session expires
in the Session Cache</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslsessionticketkeyfile">SSLSessionTicketKeyFile <em>file-path</em></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Persistent encryption/decryption key for TLS session tickets</td></tr>
<tr><td><a href="mod_ssl.html#sslsessiontickets">SSLSessionTickets on|off</a></td><td> on </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Enable or disable use of TLS session tickets</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslsrpunknownuserseed">SSLSRPUnknownUserSeed <em>secret-string</em></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">SRP unknown user seed</td></tr>
<tr><td><a href="mod_ssl.html#sslsrpverifierfile">SSLSRPVerifierFile <em>file-path</em></a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Path to SRP verifier file</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslstaplingcache">SSLStaplingCache <em>type</em></a></td><td></td><td>s</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Configures the OCSP stapling cache</td></tr>
<tr><td><a href="mod_ssl.html#sslstaplingerrorcachetimeout">SSLStaplingErrorCacheTimeout <em>seconds</em></a></td><td> 600 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Number of seconds before expiring invalid responses in the OCSP stapling cache</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslstaplingfaketrylater">SSLStaplingFakeTryLater on|off</a></td><td> on </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Synthesize "tryLater" responses for failed OCSP stapling queries</td></tr>
<tr><td><a href="mod_ssl.html#sslstaplingforceurl">SSLStaplingForceURL <em>uri</em></a></td><td></td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Override the OCSP responder URI specified in the certificate's AIA extension</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslstaplingrespondertimeout">SSLStaplingResponderTimeout <em>seconds</em></a></td><td> 10 </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Timeout for OCSP stapling queries</td></tr>
<tr><td><a href="mod_ssl.html#sslstaplingresponsemaxage">SSLStaplingResponseMaxAge <em>seconds</em></a></td><td> -1 </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Maximum allowable age for OCSP stapling responses</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslstaplingresponsetimeskew">SSLStaplingResponseTimeSkew <em>seconds</em></a></td><td> 300 </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Maximum allowable time skew for OCSP stapling response validation</td></tr>
<tr><td><a href="mod_ssl.html#sslstaplingreturnrespondererrors">SSLStaplingReturnResponderErrors on|off</a></td><td> on </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Pass stapling related OCSP errors on to client</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslstaplingstandardcachetimeout">SSLStaplingStandardCacheTimeout <em>seconds</em></a></td><td> 3600 </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Number of seconds before expiring responses in the OCSP stapling cache</td></tr>
<tr><td><a href="mod_ssl.html#sslstrictsnivhostcheck">SSLStrictSNIVHostCheck on|off</a></td><td> off </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Whether to allow non-SNI clients to access a name-based virtual
host.
</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslusername">SSLUserName <em>varname</em></a></td><td></td><td>sdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Variable name to determine user name</td></tr>
<tr><td><a href="mod_ssl.html#sslusestapling">SSLUseStapling on|off</a></td><td> off </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Enable stapling of OCSP responses in the TLS handshake</td></tr>
<tr class="odd"><td><a href="mod_ssl.html#sslverifyclient">SSLVerifyClient <em>level</em></a></td><td> none </td><td>svdh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Type of Client Certificate verification</td></tr>
<tr><td><a href="mod_ssl.html#sslverifydepth">SSLVerifyDepth <em>number</em></a></td><td> 1 </td><td>svdh</td><td>E</td></tr><tr><td class="descr" colspan="4">Maximum depth of CA Certificates in Client
Certificate verification</td></tr>
<tr class="odd"><td><a href="mpm_common.html#startservers">StartServers <var>number</var></a></td><td></td><td>s</td><td>M</td></tr><tr class="odd"><td class="descr" colspan="4">Number of child server processes created at startup</td></tr>
<tr><td><a href="mpm_common.html#startthreads">StartThreads <var>number</var></a></td><td></td><td>s</td><td>M</td></tr><tr><td class="descr" colspan="4">Number of threads created on startup</td></tr>
<tr class="odd"><td><a href="mod_substitute.html#substitute">Substitute <var>s/pattern/substitution/[infq]</var></a></td><td></td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Pattern to filter the response content</td></tr>
<tr><td><a href="mod_substitute.html#substituteinheritbefore">SubstituteInheritBefore on|off</a></td><td> off </td><td>dh</td><td>E</td></tr><tr><td class="descr" colspan="4">Change the merge order of inherited patterns</td></tr>
<tr class="odd"><td><a href="mod_substitute.html#substitutemaxlinelength">SubstituteMaxLineLength <var>bytes</var>(b|B|k|K|m|M|g|G)</a></td><td> 1m </td><td>dh</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Set the maximum line size</td></tr>
<tr><td><a href="mod_unixd.html#suexec">Suexec On|Off</a></td><td></td><td>s</td><td>B</td></tr><tr><td class="descr" colspan="4">Enable or disable the suEXEC feature</td></tr>
<tr class="odd"><td><a href="mod_suexec.html#suexecusergroup">SuexecUserGroup <em>User Group</em></a></td><td></td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">User and group for CGI programs to run as</td></tr>
<tr><td><a href="mpm_common.html#threadlimit" id="T" name="T">ThreadLimit <var>number</var></a></td><td></td><td>s</td><td>M</td></tr><tr><td class="descr" colspan="4">Sets the upper limit on the configurable number of threads
per child process</td></tr>
<tr class="odd"><td><a href="mpm_common.html#threadsperchild">ThreadsPerChild <var>number</var></a></td><td></td><td>s</td><td>M</td></tr><tr class="odd"><td class="descr" colspan="4">Number of threads created by each child process</td></tr>
<tr><td><a href="mpm_common.html#threadstacksize">ThreadStackSize <var>size</var></a></td><td></td><td>s</td><td>M</td></tr><tr><td class="descr" colspan="4">The size in bytes of the stack used by threads handling
client connections</td></tr>
<tr class="odd"><td><a href="core.html#timeout">TimeOut <var>seconds</var></a></td><td> 60 </td><td>sv</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Amount of time the server will wait for
certain events before failing a request</td></tr>
<tr><td><a href="core.html#traceenable">TraceEnable <var>[on|off|extended]</var></a></td><td> on </td><td>s</td><td>C</td></tr><tr><td class="descr" colspan="4">Determines the behaviour on <code>TRACE</code> requests</td></tr>
<tr class="odd"><td><a href="mod_log_config.html#transferlog">TransferLog <var>file</var>|<var>pipe</var></a></td><td></td><td>sv</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Specify location of a log file</td></tr>
<tr><td><a href="mod_mime.html#typesconfig">TypesConfig <var>file-path</var></a></td><td> conf/mime.types </td><td>s</td><td>B</td></tr><tr><td class="descr" colspan="4">The location of the <code>mime.types</code> file</td></tr>
<tr class="odd"><td><a href="core.html#undefine" id="U" name="U">UnDefine <var>parameter-name</var></a></td><td></td><td>s</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Undefine the existence of a variable</td></tr>
<tr><td><a href="mod_macro.html#undefmacro">UndefMacro <var>name</var></a></td><td></td><td>svd</td><td>B</td></tr><tr><td class="descr" colspan="4">Undefine a macro</td></tr>
<tr class="odd"><td><a href="mod_env.html#unsetenv">UnsetEnv <var>env-variable</var> [<var>env-variable</var>]
...</a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Removes variables from the environment</td></tr>
<tr><td><a href="mod_macro.html#use">Use <var>name</var> [<var>value1</var> ... <var>valueN</var>]
</a></td><td></td><td>svd</td><td>B</td></tr><tr><td class="descr" colspan="4">Use a macro</td></tr>
<tr class="odd"><td><a href="core.html#usecanonicalname">UseCanonicalName On|Off|DNS</a></td><td> Off </td><td>svd</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Configures how the server determines its own name and
port</td></tr>
<tr><td><a href="core.html#usecanonicalphysicalport">UseCanonicalPhysicalPort On|Off</a></td><td> Off </td><td>svd</td><td>C</td></tr><tr><td class="descr" colspan="4">Configures how the server determines its own name and
port</td></tr>
<tr class="odd"><td><a href="mod_unixd.html#user">User <var>unix-userid</var></a></td><td> #-1 </td><td>s</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">The userid under which the server will answer
requests</td></tr>
<tr><td><a href="mod_userdir.html#userdir">UserDir <em>directory-filename</em> [<em>directory-filename</em>] ...
</a></td><td></td><td>sv</td><td>B</td></tr><tr><td class="descr" colspan="4">Location of the user-specific directories</td></tr>
<tr class="odd"><td><a href="mod_privileges.html#vhostcgimode" id="V" name="V">VHostCGIMode On|Off|Secure</a></td><td> On </td><td>v</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">Determines whether the virtualhost can run
subprocesses, and the privileges available to subprocesses.</td></tr>
<tr><td><a href="mod_privileges.html#vhostcgiprivs">VHostPrivs [+-]?<var>privilege-name</var> [[+-]?privilege-name] ...</a></td><td></td><td>v</td><td>X</td></tr><tr><td class="descr" colspan="4">Assign arbitrary privileges to subprocesses created
by a virtual host.</td></tr>
<tr class="odd"><td><a href="mod_privileges.html#vhostgroup">VHostGroup <var>unix-groupid</var></a></td><td></td><td>v</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">Sets the Group ID under which a virtual host runs.</td></tr>
<tr><td><a href="mod_privileges.html#vhostprivs">VHostPrivs [+-]?<var>privilege-name</var> [[+-]?privilege-name] ...</a></td><td></td><td>v</td><td>X</td></tr><tr><td class="descr" colspan="4">Assign arbitrary privileges to a virtual host.</td></tr>
<tr class="odd"><td><a href="mod_privileges.html#vhostsecure">VHostSecure On|Off</a></td><td> On </td><td>v</td><td>X</td></tr><tr class="odd"><td class="descr" colspan="4">Determines whether the server runs with enhanced security
for the virtualhost.</td></tr>
<tr><td><a href="mod_privileges.html#vhostuser">VHostUser <var>unix-userid</var></a></td><td></td><td>v</td><td>X</td></tr><tr><td class="descr" colspan="4">Sets the User ID under which a virtual host runs.</td></tr>
<tr class="odd"><td><a href="mod_vhost_alias.html#virtualdocumentroot">VirtualDocumentRoot <em>interpolated-directory</em>|none</a></td><td> none </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Dynamically configure the location of the document root
for a given virtual host</td></tr>
<tr><td><a href="mod_vhost_alias.html#virtualdocumentrootip">VirtualDocumentRootIP <em>interpolated-directory</em>|none</a></td><td> none </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Dynamically configure the location of the document root
for a given virtual host</td></tr>
<tr class="odd"><td><a href="core.html#virtualhost">&lt;VirtualHost
    <var>addr</var>[:<var>port</var>] [<var>addr</var>[:<var>port</var>]]
    ...&gt; ... &lt;/VirtualHost&gt;</a></td><td></td><td>s</td><td>C</td></tr><tr class="odd"><td class="descr" colspan="4">Contains directives that apply only to a specific
hostname or IP address</td></tr>
<tr><td><a href="mod_vhost_alias.html#virtualscriptalias">VirtualScriptAlias <em>interpolated-directory</em>|none</a></td><td> none </td><td>sv</td><td>E</td></tr><tr><td class="descr" colspan="4">Dynamically configure the location of the CGI directory for
a given virtual host</td></tr>
<tr class="odd"><td><a href="mod_vhost_alias.html#virtualscriptaliasip">VirtualScriptAliasIP <em>interpolated-directory</em>|none</a></td><td> none </td><td>sv</td><td>E</td></tr><tr class="odd"><td class="descr" colspan="4">Dynamically configure the location of the CGI directory for
a given virtual host</td></tr>
<tr><td><a href="mod_watchdog.html#watchdoginterval" id="W" name="W">WatchdogInterval <var>number-of-seconds</var></a></td><td> 1 </td><td>s</td><td>B</td></tr><tr><td class="descr" colspan="4">Watchdog interval in seconds</td></tr>
<tr class="odd"><td><a href="mod_include.html#xbithack" id="X" name="X">XBitHack on|off|full</a></td><td> off </td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Parse SSI directives in files with the execute bit
set</td></tr>
<tr><td><a href="mod_xml2enc.html#xml2encalias">xml2EncAlias <var>charset alias [alias ...]</var></a></td><td></td><td>s</td><td>B</td></tr><tr><td class="descr" colspan="4">Recognise Aliases for encoding values</td></tr>
<tr class="odd"><td><a href="mod_xml2enc.html#xml2encdefault">xml2EncDefault <var>name</var></a></td><td></td><td>svdh</td><td>B</td></tr><tr class="odd"><td class="descr" colspan="4">Sets a default encoding to assume when absolutely no information
can be <a href="#sniffing">automatically detected</a></td></tr>
<tr><td><a href="mod_xml2enc.html#xml2startparse">xml2StartParse <var>element [element ...]</var></a></td><td></td><td>svdh</td><td>B</td></tr><tr><td class="descr" colspan="4">Advise the parser to skip leading junk.</td></tr>
</table></div>
<div class="bottomlang">
<p><span>Idiomas disponibles: </span><a href="../de/mod/quickreference.html" hreflang="de" rel="alternate" title="Deutsch">&nbsp;de&nbsp;</a> |
<a href="../en/mod/quickreference.html" hreflang="en" rel="alternate" title="English">&nbsp;en&nbsp;</a> |
<a href="../es/mod/quickreference.html" title="Espa�ol">&nbsp;es&nbsp;</a> |
<a href="../fr/mod/quickreference.html" hreflang="fr" rel="alternate" title="Fran�ais">&nbsp;fr&nbsp;</a> |
<a href="../ja/mod/quickreference.html" hreflang="ja" rel="alternate" title="Japanese">&nbsp;ja&nbsp;</a> |
<a href="../ko/mod/quickreference.html" hreflang="ko" rel="alternate" title="Korean">&nbsp;ko&nbsp;</a> |
<a href="../tr/mod/quickreference.html" hreflang="tr" rel="alternate" title="T�rk�e">&nbsp;tr&nbsp;</a> |
<a href="../zh-cn/mod/quickreference.html" hreflang="zh-cn" rel="alternate" title="Simplified Chinese">&nbsp;zh-cn&nbsp;</a></p>
</div><div class="top"><a href="#page-header"><img src="../images/up.gif" alt="top" /></a></div><div class="section"><h2><a id="comments_section" name="comments_section">Comentarios</a></h2><div class="warning"><strong>Notice:</strong><br />This is not a Q&amp;A section. Comments placed here should be pointed towards suggestions on improving the documentation or server, and may be removed again by our moderators if they are either implemented or considered invalid/off-topic. Questions on how to manage the Apache HTTP Server should be directed at either our IRC channel, #httpd, on Freenode, or sent to our <a href="http://httpd.apache.org/lists.html">mailing lists</a>.</div>
<script type="text/javascript"><!--//--><![CDATA[//><!--
var comments_shortname = 'httpd';
var comments_identifier = 'http://httpd.apache.org/docs/2.4/mod/quickreference.html';
(function(w, d) {
    if (w.location.hostname.toLowerCase() == "httpd.apache.org") {
        d.write('<div id="comments_thread"><\/div>');
        var s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://comments.apache.org/show_comments.lua?site=' + comments_shortname + '&page=' + comments_identifier;
        (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s);
    }
    else { 
        d.write('<div id="comments_thread">Comments are disabled for this page at the moment.<\/div>');
    }
})(window, document);
//--><!]]></script></div><div id="footer">
<p class="apache">Copyright 2018 The Apache Software Foundation.<br />Licencia bajo los t�rminos de <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License, Version 2.0</a>.</p>
<p class="menu"><a href="../mod/">M�dulos</a> | <a href="../mod/directives.html">Directivas</a> | <a href="http://wiki.apache.org/httpd/FAQ">Preguntas Frecuentes</a> | <a href="../glossary.html">Glosario</a> | <a href="../sitemap.html">Mapa del sitio web</a></p></div><script type="text/javascript"><!--//--><![CDATA[//><!--
if (typeof(prettyPrint) !== 'undefined') {
    prettyPrint();
}
//--><!]]></script>
</body></html>